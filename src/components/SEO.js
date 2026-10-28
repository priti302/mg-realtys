import React from "react";

export default function SEO({
  title,
  description,
  path = "/",
}) {
  const canonical =
    `https://mgrealtysindia.com${path}`;

  return (
    <>
      <title>{title}</title>

      <meta
        name="description"
        content={description}
      />

      <link
        rel="canonical"
        href={canonical}
      />

      <meta
        name="robots"
        content="index, follow"
      />
    </>
  );
}