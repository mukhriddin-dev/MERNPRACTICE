import React, { useState } from "react";
import axios from "axios";

const CreateNews = () => {


    const [input, setInput] = useState({
        title: "",
        content: ""
    })

    function handleChange(e) {

        const { name, value } = e.target;
        setInput(prev => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }

        function handleClick(e){
            e.preventDefault();
            // console.log(input);
            setInput({title:"", content:""});
            // console.log(input);
            const newStr={
                title:input.title,
                content:input.content
            }
            axios.post('http://localhost:5000/create', newStr)
        } 


        return (
            <>
                <div className="p-3 w-100 h-100 d-inline-block">
                    <h2 className="card-title">CREATE NEWS</h2>

                    <div className="col-4 mx-auto shadow p-3 mb-5 bg-body rounded p-5">

                        <div className="mb-3">

                            <label  className="form-label">
                                News title
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="Enter your news"
                                autoComplete="off"
                                name="title"
                                onChange={handleChange}
                                value={input.title}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">
                                News full text
                            </label>
                            <textarea
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                rows="3"
                                autoComplete="off"
                                placeholder="describe your news"
                                name="content"
                                onChange={handleChange}
                                value={input.content}
                            ></textarea>
                        </div>
                        <div className="btn btn-success" onClick={handleClick}> <i className="bi bi-plus-lg"></i> Add </div>
                    </div>
                </div>
            </>
        );
    };

    export default CreateNews;
