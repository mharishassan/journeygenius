import React from 'react';
import ReactDOM  from 'react-dom';
import BackDrop from './Backdrop';
import { CSSTransition } from 'react-transition-group';
import './Modal.css';

const ModalOverLay=(props)=>{
    
    const content=(
        <div className={`modal ${props.className}`} style={props.style}>
            <header className={`modal__header ${props.headerClass}`}>
                <h2>{props.header}</h2>
            </header>
            <form onSubmit={props.onSubmit? props.onSubmit : event => event.preventDefault()}>
                <div className={`modal__content ${props.contentClass}`}>
                    {props.children}
                </div>
                <footer className={`modal__footer ${props.footerClass}`}>
                    {props.footer}
                </footer>
            </form>

        </div>
    );

    return ReactDOM.createPortal(content,document.getElementById('modal-hook'));
}

function Modal(props) {
  return (
    <React.Fragment>
        {props.show&&<BackDrop onClick={props.onCancel}/>}
        <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
        >
            <ModalOverLay {...props}/>
        </CSSTransition>
    </React.Fragment>
  )
}

export default Modal;
