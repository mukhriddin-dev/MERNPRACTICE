import React from 'react';

const News = () => {
    return (
        <>
            <div className="card m-3" style={{"width": "18rem"}}>
                <img src="https://images.unsplash.com/photo-1638913665258-ddd2bceafb30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 
                    </div>
            </div>
        </>
    );
};

export default News;