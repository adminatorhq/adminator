import fs from "fs-extra";
import noop from "lodash/noop";
import path from "path";
import { ConfigService, NodeEnvironments } from "../config/config.service";

import { AbstractConfigDataPersistenceService } from "./AbstractConfigDataPersistenceService";
import { ConfigDomain } from "./types";

export class JsonFileConfigDataPersistenceAdaptor<
  T
> extends AbstractConfigDataPersistenceService<T> {
  constructor(configDomain: ConfigDomain, configService: ConfigService) {
    super(configDomain, configService);
  }

  async setup() {
    noop();
  }

  private pathToConfigDomain = (type: ConfigDomain) => {
    const file =
      this.configService.getNodeEnvironment() === NodeEnvironments.Test
        ? `${type}.test.json`
        : `${type}.json`;
    return path.resolve(
      process.env.CURRENT_WORKING_DIRECTORY || process.cwd(),
      ".config-data",
      file
    );
  };

  async resetToEmpty() {
    fs.removeSync(this.pathToConfigDomain(this.configDomain));
  }

  private async getDomainData(): Promise<Record<string, T>> {
    try {
      return (
        (await fs.readJson(this.pathToConfigDomain(this.configDomain), {
          throws: false,
        })) || {}
      );
    } catch (error) {
      return {};
    }
  }

  private async persist(data: Record<string, T>) {
    await fs.outputJSON(this.pathToConfigDomain(this.configDomain), data, {
      spaces: 2,
    });
  }

  async getAllItems() {
    const allIndexedItems = await this.getDomainData();
    return Object.values(allIndexedItems);
  }

  async getItem(key: string) {
    const allIndexedItems = await this.getDomainData();
    const currentItem = allIndexedItems[key];
    if (currentItem) {
      return currentItem;
    }
    return undefined;
  }

  async upsertItem(key: string, data: T) {
    const allIndexedItems = await this.getDomainData();
    allIndexedItems[key] = data;
    await this.persist(allIndexedItems);
  }

  async removeItem(key: string): Promise<void> {
    const allIndexedItems = await this.getDomainData();
    delete allIndexedItems[key];
    await this.persist(allIndexedItems);
  }

  async saveAllItems(keyField: keyof T, data: T[]) {
    await this.persist(
      Object.fromEntries(data.map((datum) => [datum[keyField], datum]))
    );
  }
}
