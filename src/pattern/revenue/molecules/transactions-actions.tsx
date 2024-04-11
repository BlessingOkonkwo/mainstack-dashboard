import React from "react";
import ChevronDownIcon from "@/pattern/common/atoms/icons/chevron-down-icon";
import DownloadIcon from "@/pattern/common/atoms/icons/download-icon";
import ButtonWithIcon from "@/pattern/common/molecules/controls/button-with-icon";
import { show } from "@ebay/nice-modal-react";
import FilterSlideOutMenu from "../organisms/filter-slideout-menu";

const TransactionsActions = () => {
  const showFilterSheet = () => {
    show(FilterSlideOutMenu);
  };
  return (
    <div className="flex items-center gap-3 w-fit">
      <ButtonWithIcon
        variant="grey"
        className="pr-[20px] pl-[30px] !w-fit"
        suffixIcon={<ChevronDownIcon />}
        onClick={showFilterSheet}
      >
        Filter
      </ButtonWithIcon>
      <ButtonWithIcon
        variant="grey"
        className="pr-[20px] pl-[30px] !w-fit"
        suffixIcon={<DownloadIcon />}
        onClick={() => {}}
      >
        Export list
      </ButtonWithIcon>
    </div>
  );
};

export default TransactionsActions;
