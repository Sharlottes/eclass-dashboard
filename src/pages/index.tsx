import React from "react";

const HomePage: React.FC = () => {
  const [html, setHtml] = React.useState<JSX.Element>();
  const handleClick = async () => {
    const res: CrawlResponse = await fetch(`/api/crawl`)
      .then((res) => res.json())
      .catch(() => undefined);
    if (!res) return;
    console.log(res.content);
    setHtml(<div dangerouslySetInnerHTML={{ __html: res.content }}></div>);
  };
  return (
    <>
      <button onClick={handleClick}>go</button>
      {html}
    </>
  );
};

export default HomePage;
