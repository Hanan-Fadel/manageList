import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = ()=> {
    console.log(showModal);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = <div><Button onClick={handleClose} primary>I Accept</Button></div>;

  const modal = <Modal onClose={handleClose} actionBar={actionBar}>
    <p>
        Here is an  important agreement for you to accept
    </p>
  </Modal>;

    return (
        <div>
            <Button onClick={handleClick} primary> Open Modal</Button>
            {showModal && modal}
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia suscipit imperdiet. Etiam ultricies risus vel magna vehicula suscipit. Morbi dignissim nisl vitae efficitur suscipit. Nullam finibus dui ut ante tempus cursus. Nulla pharetra aliquet risus, eget euismod turpis gravida vitae. Pellentesque ipsum ligula, pharetra vehicula finibus in, facilisis id mi. Cras non felis non nibh semper porta a ac enim. Suspendisse vestibulum, nunc vitae porta luctus, massa mi aliquet risus, nec fermentum arcu est quis diam. Praesent auctor tincidunt venenatis. Integer in lacinia est. Suspendisse in magna mattis, tincidunt turpis a, varius tellus. Donec gravida augue ante, quis aliquet diam accumsan eget.
                Duis eget placerat ex, eget lobortis orci. Sed cursus ornare quam et varius. Duis risus elit, tempor quis elit nec, tristique volutpat erat. Pellentesque faucibus pulvinar libero ultricies auctor. Suspendisse potenti. Donec pretium orci eget dui consequat fermentum. Vestibulum iaculis risus dolor, a dapibus felis sollicitudin lacinia. Sed at iaculis quam, et facilisis quam. Proin luctus placerat ligula mollis tincidunt. Nunc egestas nibh quis ante auctor, vitae pulvinar nunc elementum. Cras interdum felis ac magna tristique, a congue tellus dapibus. Sed laoreet condimentum dui vitae vulputate. Nullam scelerisque eros non aliquet aliquam. Nullam vel blandit augue.
                Integer sed pharetra magna. Proin at sodales est. Quisque suscipit nunc at molestie ultricies. Proin a cursus odio, quis sollicitudin elit. Sed mollis, turpis eu aliquet pretium, enim odio mattis mauris, non congue augue sapien a mi. Phasellus elementum eros sed semper facilisis. Aliquam erat volutpat. Quisque convallis pharetra augue ac gravida. Mauris eu varius mauris. Nunc porttitor felis sit amet libero efficitur, sit amet euismod enim aliquet. Quisque mattis hendrerit lectus ut fringilla. Suspendisse porttitor sit amet risus feugiat pulvinar.
                Integer sed pharetra magna. Proin at sodales est. Quisque suscipit nunc at molestie ultricies. Proin a cursus odio, quis sollicitudin elit. Sed mollis, turpis eu aliquet pretium, enim odio mattis mauris, non congue augue sapien a mi. Phasellus elementum eros sed semper facilisis. Aliquam erat volutpat. Quisque convallis pharetra augue ac gravida. Mauris eu varius mauris. Nunc porttitor felis sit amet libero efficitur, sit amet euismod enim aliquet. Quisque mattis hendrerit lectus ut fringilla. Suspendisse porttitor sit amet risus feugiat pulvinar.

            </p>
        </div>);
}

export default ModalPage;