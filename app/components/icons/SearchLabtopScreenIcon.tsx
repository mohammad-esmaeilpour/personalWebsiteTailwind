import { IconProps } from "@/app/types/global";
import React from "react";

const SearchLabtopScreenIcon = ({ size }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="m15.68 15.05l.64-.627l-2.447-2.446q.275-.425.393-.804q.119-.379.119-.904q0-1.206-.845-2.045q-.846-.84-2.04-.84t-2.04.84t-.845 2.045t.845 2.045q.846.84 2.04.84q.525 0 .91-.138q.386-.137.836-.412zm-4.18-2.78q-.825 0-1.412-.588T9.5 10.269t.588-1.412t1.412-.588q.82 0 1.41.588q.59.587.59 1.412t-.587 1.413t-1.413.587m-6.884 5.193q-.691 0-1.153-.463T3 15.846V6.077q0-.69.463-1.153t1.152-.462h14.77q.69 0 1.152.462T21 6.077v9.77q0 .69-.463 1.152t-1.153.463zm-2.847 2v-1h20.462v1z"
      />
    </svg>
  );
};

export default SearchLabtopScreenIcon;
