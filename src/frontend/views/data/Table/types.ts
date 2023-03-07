import { IPaginatedDataState } from "@hadmean/protozoa";
import { QueryFilter } from "shared/types/data";

export interface ITableViewProps {
  entity: string;
  lean?: true;
  border?: true;
  tabKey?: string;
  persitentFilters?: QueryFilter[];
  defaultTableState?: Pick<
    IPaginatedDataState<unknown>,
    "pageSize" | "sortBy" | "filters"
  >;
}
