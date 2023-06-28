import React from "react";
import Comment from "./components/comment";
import { faker } from '@faker-js/faker';

function App() {
  const arr = [1,2,3,4,5,6,7,8,9,10]
  return (
    <div className="main">
      <div className="main__list">
        {
          arr.map((item) => <Comment key={item} name={faker.person.firstName()} text={faker.lorem.paragraph()} img={faker.image.avatar()}/>)
        }
      </div>
    </div>
  );
}

export default App;
