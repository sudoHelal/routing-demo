type props = {
  name: string;
  age: number;
};
export const Demo = ({ name, age }: props) => {
  return (
    <div>
      <h1>
        hi {name},{age}
      </h1>
    </div>
  );
};
