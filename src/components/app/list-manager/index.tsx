import { useEffect, useState } from "react";
import styled from "styled-components";
import { DataStateKeys } from "frontend/lib/data/types";
import { arrayMoveImmutable } from "shared/lib/array/move";
import SortableList, { SortableItem } from "react-easy-sort";
import { Z_INDEXES } from "frontend/design-system/constants/zIndex";
import { sortListByOrder } from "shared/lib/array/sort";
import { msg } from "@lingui/macro";
import { useLingui } from "@lingui/react";
import { defaultSearchFunction, defaultToEmptyArray } from "./utils";
import { IListMangerItemProps, ListManagerItem } from "./list-manager-item";
import { Input } from "@/components/ui/input";
import { IEmptyWrapperProps } from "../empty-wrapper/types";
import { ViewStateMachine } from "../view-state-machine";
import { ListSkeleton } from "../skeleton/list";
import { EmptyWrapper } from "../empty-wrapper";
import { SystemIcon } from "../system-icons";

const SEARCH_THRESHOLD = 10;

const Root = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  border-radius: 0.25rem;
  margin: -16px;
  border-radius: 0px;

  .dragged .grab-icon {
    cursor: grabbing;
  }
`;

function FormSearch({ onChange }: { onChange: (value: string) => void }) {
  const { _ } = useLingui();
  return (
    <div className="relative flex w-full">
      <Input
        className="rounded-none focus-visible:ring-0 pl-3 border-t-0 border-x-0"
        type="search"
        onChange={(e) => onChange(e.target.value.toLowerCase())}
        placeholder={_(msg`Search`)}
      />
      <button
        className="text-primary px-3 border-b border-border"
        type="button"
      >
        <SystemIcon icon="Search" className="w-5 h-5" />
      </button>
    </div>
  );
}

type StringProps<T> = {
  [K in keyof T]: T[K] extends string ? K : never;
}[keyof T];

export interface IProps<T, K extends StringProps<T>> {
  items: DataStateKeys<T[]>;
  listLengthGuess: number;
  sort?: {
    orderList: string[];
    key: StringProps<T>;
    on: (data: string[]) => void;
  };
  labelField: K;
  empty?: IEmptyWrapperProps;
  getLabel?: (name: string) => string;
  render: (item: T & { label: string }, index: number) => IListMangerItemProps;
}

export function ListManager<T, K extends StringProps<T>>({
  labelField,
  listLengthGuess,
  getLabel,
  items,
  empty,
  sort,
  render,
}: IProps<T, K>) {
  const itemsLength = items.data.length;
  const [searchString, setSearchString] = useState("");

  const [itemsData, setItemsData] = useState<Array<T>>([]);

  const onSortEnd = (oldOrder: number, newOrder: number) => {
    const newOrderItems = arrayMoveImmutable(itemsData, oldOrder, newOrder);
    setItemsData(newOrderItems);
    sort?.on(newOrderItems.map((item) => item[sort.key] as unknown as string));
  };

  useEffect(() => {
    let itemsData$1 = defaultToEmptyArray(items.data);

    if (sort?.orderList) {
      itemsData$1 = sortListByOrder(sort.orderList, itemsData$1, sort.key);
    }

    setItemsData(itemsData$1);
  }, [items.data.length, sort?.orderList.length]);

  const labelledItems: Array<T & { label: string }> = itemsData.map((item) => ({
    ...item,
    label: getLabel
      ? getLabel(item[labelField] as unknown as string)
      : item[labelField],
  })) as Array<T & { label: string }>;

  const searchResults =
    searchString.length > 0
      ? defaultSearchFunction(labelledItems, searchString, labelField)
      : labelledItems;

  return (
    <ViewStateMachine
      error={items.error}
      loading={items.isLoading}
      loader={<ListSkeleton count={listLengthGuess} />}
    >
      {itemsLength === 0 ? (
        <EmptyWrapper {...{ ...empty }} />
      ) : (
        <Root>
          {itemsLength > SEARCH_THRESHOLD ? (
            <FormSearch onChange={setSearchString} />
          ) : null}
          <SortableList
            onSortEnd={onSortEnd}
            className="list"
            draggedItemClassName="dragged"
          >
            {searchResults.map((item, index) => (
              <SortableItem key={item[labelField] as unknown as string}>
                <div className="item" style={{ zIndex: Z_INDEXES.dragAndDrop }}>
                  <ListManagerItem
                    {...render(item, index)}
                    sortable={
                      !!sort && searchString.length === 0 && itemsLength > 1
                    }
                  />
                </div>
              </SortableItem>
            ))}
          </SortableList>
          {searchResults.length === 0 && searchString.length > 0 ? (
            <EmptyWrapper text={msg`No Search Results`} />
          ) : null}
        </Root>
      )}
    </ViewStateMachine>
  );
}
