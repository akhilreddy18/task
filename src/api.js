const APIURL = 'http://localhost:3001/invoice/1';

export async function getInvoice() {
	
	return fetch(APIURL)
	.then(resp => {
  //   console.log(resp.type)
		// if(resp.status >=400 && resp.status < 500) {
  //         return resp.json().then(data => {
  //           let err = {errorMessage: data.message};
  //           throw err;
  //         })
  //       // } else {
  //       //   let err = {errorMessage: 'Please try again later, server is not responding'};
  //       //   throw err;
  //       // }
  //     }
  console.log(resp.body);
      return resp;
   })
}

