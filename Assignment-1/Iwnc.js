function Iwnc() {
  const { } = React;

  let arr = [
    "Google Search Console Access",
    "Google Analytics Access",
    "Website Access",
    "Site Level Optimization",
    "On Page Optimization",
    "Content Creation",
    "Anchor Text/URL Mapping",
    "Google Data Studio Report + Local Reporting Suite",
    "Review Management",
    "Index Links",
  ];

  let tablehead = ["MONTH 1", "MONTH 2", "MONTH 3"];
  return (
    <>
      <table>
        <thead>
          <tr>
            {tablehead.map((e, ind) => {
              return (
                <th key={ind} contentEditable="true">
                  {e}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {arr.map((e, ind) => {
            return (
              <tr key={ind}>
                <td contentEditable="true">{e}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
ReactDOM.render(<Iwnc />, document.querySelector("#iwcn"));
