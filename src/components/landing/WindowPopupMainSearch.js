import React from "react";

function WindowPopupMainSearch() {
    return (
        <div className="modal fade" id="main-popup-search" tabIndex="-1" role="dialog"
             aria-labelledby="main-popup-search" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered window-popup main-popup-search" role="document">
                <div className="modal-content">
                    <a href="#" className="close icon-close" data-dismiss="modal" aria-label="Close">
                        <svg className="olymp-close-icon">
                            <use xlinkHref="#olymp-close-icon"/>
                        </svg>
                    </a>
                    <div className="modal-body">
                        <form className="form-inline search-form" method="post">
                            <div className="form-group label-floating">
                                <label className="control-label">What are you looking for?</label>
                                <input className="form-control bg-white" placeholder="" type="text" value=""/>
                            </div>

                            <button className="btn btn-purple btn-lg">Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WindowPopupMainSearch