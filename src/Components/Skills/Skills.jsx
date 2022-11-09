import React from "react";

const Skills = () => {
  return (
    <div className="text-center flex flex-col mx-10 my-10">
      <h2 className="text-4xl mt-4 my-8">Skills</h2>
      <div className="grid grid-cols-2 mx-5 text-start">
        <div className="mx-16">
          <span>React</span>
          <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-300 my-2">
            <div class="bg-blue-600 h-2.5 rounded-full w-64"></div>
          </div>
          <span>React Native</span>
          <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-300 my-2">
            <div class="bg-blue-600 h-2.5 rounded-full w-52"></div>
          </div>
          <span>Redux</span>
          <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-300 my-2">
            <div class="bg-blue-600 h-2.5 rounded-full w-40"></div>
          </div>
        </div>
        <div className="mx-16">
          <span>Javascript</span>
          <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-300 my-2">
            <div class="bg-blue-600 h-2.5 rounded-full w-56"></div>
          </div>
          <span>HTML5</span>
          <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-300 my-2">
            <div class="bg-blue-600 h-2.5 rounded-full w-64"></div>
          </div>
          <span>CSS</span>
          <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-300 my-2">
            <div class="bg-blue-600 h-2.5 rounded-full w-56"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
