import { LightningElement } from 'lwc';

export default class Controls extends LightningElement {

    handleAdd(){
        this.dispatchEvent(new CustomEvent('add') );
    }

    handleSubstract(){

        this.dispatchEvent(new CustomEvent('substract'));
    }
}