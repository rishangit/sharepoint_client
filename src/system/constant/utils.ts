export const ShadeColor = (col: string, amt: number) => {
  return (
    "#" +
    col
      .replace(/^#/, "")
      .replace(/../g, (col) =>
        (
          "0" + Math.min(255, Math.max(0, parseInt(col, 16) + amt)).toString(16)
        ).substr(-2)
      )
  );
};
