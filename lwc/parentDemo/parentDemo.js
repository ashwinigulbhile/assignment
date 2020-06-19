import { LightningElement, api,track } from 'lwc';
import getAccount from '@salesforce/apex/getAccountRecords.getAccount';

export default class ParentDemo extends LightningElement {
    @track accName;
    @track acclimit;
    @track myaccount;
    @track copyOfmyaccount;
    @track error;

    handleInput(event) {
        if (event.target.name == 'AccountName') {
            this.accName = event.target.value;
        }
        else if (event.target.name == 'noOfAccount') {
            this.acclimit = event.target.value;
        }
        else if (event.target.name == 'searchText') {
            this.filterData(event.target.value);
        }
    }
    handleSearch() {
        getAccount({accName: this.accName, acclimit: this.acclimit})
            .then(result =>{
                this.myaccount = result;
                this.copyOfmyaccount = [...this.myaccount];
            })
            .catch(error => {
                this.error = error;
            });
    }
    filterData(filtext){

        this.copyOfmyaccount = this.myaccount.filter(temp => temp.Name.includes(filtext));
    }
}