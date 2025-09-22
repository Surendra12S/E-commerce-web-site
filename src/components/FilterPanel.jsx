import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function FilterPanel({ title, children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b pb-3 mb-3">
      <button
        className="flex items-center justify-between w-full text-left font-medium"
        onClick={() => setOpen(!open)}
      >
        {title}
        {open ? <FaChevronDown size={16} /> : <FaChevronUp size={16} />}
      </button>
      {open && <div className="mt-2">{children}</div>}
    </div>
  );
}
