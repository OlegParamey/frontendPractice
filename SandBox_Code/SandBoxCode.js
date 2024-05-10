const myObj = {
  nameis : 'Oleg',
  commentsQty : 21,
  hasSignedAgreement : true
};

const {nameis, commentsQty} = myObj;
const {hasSignedAgreement} = myObj;

  if(hasSignedAgreement){
    console.log(nameis);
    console.log(commentsQty);
    console.log(hasSignedAgreement);
};