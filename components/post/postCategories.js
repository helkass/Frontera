export const Categories = () => {
  let items = [
    { data: "Accessibility" },
    { data: "css" },
    { data: "Javascript" },
    { data: "React js" },
    { data: "Vue js" },
    { data: "Guides" },
    { data: "UX" },
    { data: "Design" },
    { data: "Web Design" },
    { data: "Figma" },
    { data: "Walpaper" },
  ];

  const listItem = items.map((d) => (
    <li className="my-auto mr-2 mx-auto" key={d.name}>
      <a
        className="text-red-600 inline-block text-sm text-center bg-red-200 px-3 py-2 rounded-md hover:text-white hover:bg-red-500 font-bold"
        href="#"
      >
        {d.data}
      </a>
    </li>
  ));
  return (
    <div className="overflow-x-scroll whitespace-nowrap bg-orange-100">
      <ul className="flex my-3">{listItem}</ul>
    </div>
  );
};
