import React, { useEffect, useRef, useState } from "react";

 export default function EditCoursemodel({ setCourse , current}) {
  const [data, setData] = useState({});

  useEffect(()=>{
    setData(current)
  },[current])

  function submit(e) {
    e.preventDefault();
    if (
      !data?.course?.trim() ||
      !data?.module?.trim() ||
      !data?.topic?.trim() ||
      !data?.subTopic?.trim()
    ) {
      return alert("Fill all fealds");
    }

    setCourse((state) => {
      let newState = state.map(val=>{
        if(val.id === data.id){
          return data
        }
        return val
      })
        localStorage.setItem("course", JSON.stringify(newState));
        return newState
    });
  }

  return (
    <div
      className="modal fade"
      id="EditCourse"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Add Course
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={submit}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Course</label>
                <input
                  value={data.course}
                  type="text"
                  onChange={(e) =>
                    setData((state) => {
                      return { ...state, course: e.target.value };
                    })
                  }
                  className="form-control"
                  id="course"
                  aria-describedby="emailHelp"
                  placeholder="Enter Course"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Subject</label>
                <input
                  value={data.subject}
                  onChange={(e) =>
                    setData((state) => {
                      return { ...state, subject: e.target.value };
                    })
                  }
                  type="text"
                  className="form-control"
                  id="subject"
                  aria-describedby="emailHelp"
                  placeholder="Enter Subject"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Module</label>
                <input
                  value={data.module}
                  onChange={(e) =>
                    setData((state) => {
                      return { ...state, module: e.target.value };
                    })
                  }
                  type="text"
                  className="form-control"
                  id="module"
                  aria-describedby="emailHelp"
                  placeholder="Enter Module"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Topic</label>
                <input
                  value={data.topic}
                  onChange={(e) =>
                    setData((state) => {
                      return { ...state, topic: e.target.value };
                    })
                  }
                  type="text"
                  className="form-control"
                  id="topic"
                  aria-describedby="emailHelp"
                  placeholder="Enter Topic"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Sub Topic</label>
                <input
                  value={data.subTopic}
                  onChange={(e) =>
                    setData((state) => {
                      return { ...state, subTopic: e.target.value };
                    })
                  }
                  type="text"
                  className="form-control"
                  id="subTopic"
                  aria-describedby="emailHelp"
                  placeholder="Enter Sub Topic"
                />
              </div>
              <button type="submit" className="btn btn-primary m-2">
                Submit
              </button>
            </form>
          </div>
          {/* <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}


