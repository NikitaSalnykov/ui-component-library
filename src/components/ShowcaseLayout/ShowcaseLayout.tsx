import React, { useState } from "react";

interface NavItem {
  id: string;
  label: string;
}
interface Props {
  title: string;
  subtitle?: string;
  nav: NavItem[];
  children: React.ReactNode;
}

const ShowcaseLayout: React.FC<Props> = ({
  title,
  subtitle,
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
        <h1 className="text-3xl font-semibold">{title}</h1>
        {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
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
        <main className="space-y-6">{children}</main>
      </div>
    </div>
  );
};

export default ShowcaseLayout;
