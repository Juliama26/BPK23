const GrupStart = (props) => {
  const {children} = props;
  return (
    <section className="flex justify-start gap-x-2 md:gap-x-4 mb-2">
      {children}
    </section>
  );
};

const GrupEnd = (props) => {
  const {children} = props;
  return (
    <section className="flex justify-end gap-x-2 md:gap-x-4 mb-2">
      {children}
    </section>
  );
};

export {GrupStart, GrupEnd};
