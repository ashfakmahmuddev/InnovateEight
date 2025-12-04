import React from "react";

const Heading = ({text, className}) => {
  let replaceHash = text
    .replace("#", "<span class = 'one'>")
    .replace("#", "</span>");
  return <h1 className={`${className}`} dangerouslySetInnerHTML={{ __html: replaceHash }}></h1>;
};

export default Heading;



// const Heading = ({ text, as: Tag = "h1", className = "" }) => {
//   // #...# highlight part detect
//   const parts = text.split(/#(.*?)#/);

//   return (
//     <Tag className={className}>
//       {parts.map((part, index) =>
//         index % 2 === 1 ? (
//           <span key={index} className="text-[#FF7628] font-extrabold">
//             {part}
//           </span>
//         ) : (
//           part
//         )
//       )}
//     </Tag>
//   );
// };

// export default Heading;

