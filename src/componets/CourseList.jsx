import React, { useEffect, useState } from "react";
import { intialCourse } from "../initialCourse";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import AddCoursemodel from "./AddCoursemodel";
import EditCoursemodel from "./EditCoursemodel";

export default function CourseList() {
  const [characters, updateCharacters] = useState([]);

  useEffect(() => {
    let isExist = JSON.parse(localStorage.getItem("course"));
    if (!isExist || isExist.length < 1) {
      localStorage.setItem("course", JSON.stringify(intialCourse));
      updateCharacters(intialCourse);
    } else {
      updateCharacters(isExist);
    }
  }, []);

  // useEffect(()=>{
  //   // localStorage.removeItem()
  //   localStorage.setItem("course", JSON.stringify(intialCourse));
  // },[characters.length])
  console.log('hi')

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    updateCharacters(items);
  }

  return (
    <>
      <div className="container mt-4 ">
        <a
          className="btn btn-success mb-3"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#AddCourse"
        >
          Add Course
        </a>
        <div>
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">NO.</th>
                  <th scope="col">Course</th>
                  <th scope="col">Subject</th>
                  <th scope="col">Module</th>
                  <th scope="col">Topic</th>
                  <th scope="col">Sub Topic</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <Droppable droppableId="characters">
                {(provided) => (
                  <tbody
                    className="table characters"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {characters.map((val, i) => {
                      return (
                        <Draggable key={val.id} draggableId={val.id} index={i}>
                          {(provided) => (
                            <tr
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <th scope="row">{val.id}</th>
                              <td>{val.course}</td>
                              <td>{val.subject}</td>
                              <td>{val.module}</td>
                              <td>{val.topic}</td>
                              <td>{val.subTopic}</td>
                              <td>
                                <a
                                  className="btn bg-primary text-white mx-1"
                                  type="button"
                                  data-bs-toggle="modal"
                                  data-bs-target="#EditCourse"
                                >
                                  Edit
                                </a>
                                <a className="btn bg-danger text-white mx-1">
                                  Delete
                                </a>
                              </td>
                            </tr>
                          )}
                        </Draggable>
                      );
                    })}
                    {provided.placeholder}
                  </tbody>
                )}
              </Droppable>
            </table>
          </DragDropContext>
        </div>
      </div>
      <AddCoursemodel setCourse={updateCharacters} />
      <EditCoursemodel />
    </>
  );
}
