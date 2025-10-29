import React, { useState } from "react";
import { VariantGrid } from "../VariantGrid";
import { Avatar } from "../Avatart";
import { Badge } from "../Badge";

interface NavItem {
  id: string;
  label: string;
}
interface Props {
  nav: NavItem[];
  children: React.ReactNode;
}

const ShowcaseLayout: React.FC<Props> = ({
  nav,
  children,
}) => {
  const [activeId, setActiveId] = useState<string>(nav[0]?.id || "");

  const handleClick = (id: string) => {
    setActiveId(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="container">
      <header className="mb-6">
      <VariantGrid className="items-center gap-2 justify-center text-center md:justify-start md:text-start">
      <div>
      <h1 className="text-3xl font-semibold">UI Library — Showcase</h1>
<div className=" flex gap-2">
<p className="text-sm text-gray-600">Бібліотека компонентів
      </p>{' '}
      <Badge variant="primary">beta</Badge>

</div>
      </div>
      <div className=" flex flex-col-reverse  md:flex-row md:justify-end items-center gap-1 md:gap-4 ">
        <div className="flex flex-col">
        <p className="text-md p-0">by Salnykov Nikita</p>
        <div className="flex gap-2 w-full justify-center md:justify-start">
        <a href="https://github.com/NikitaSalnykov/ui-component-library" className="text-xs underline text-blue-900 ">Open github</a>
        {/* <a href="tel=380672037580" className="text-xs">+380672037580</a> */}
        </div>
        {/* <a href="mailto=salnikov.nkt@gmail.com" className="text-xs">salnikov.nkt@gmail.com</a> */}
        </div>
      <Avatar src="https://avatars.githubusercontent.com/u/121830017?v=4" size="sm" alt="Salnikov Nikita"/>
      </div>
      </VariantGrid>
      </header>

      <div className="flex gap-6 flex-col md:flex-row items-start">
        <aside className="md:sticky top-4 w-full md:w-48">
          <nav className="bg-white rounded-lg shadow-sm p-4">
            <ul className="space-y-2">
              {nav.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleClick(item.id)}
                      className={`block w-full text-left px-2 py-1 rounded text-sm transition ${
                        isActive
                          ? "bg-indigo-50 text-indigo-700"
                          : "hover:bg-gray-100 text-gray-800"
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>
        <main className="space-y-6 md:w-[80%]">{children}</main>
      </div>
    </div>
  );
};

export default ShowcaseLayout;
