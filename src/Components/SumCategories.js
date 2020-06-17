import React, {Component} from 'react'

class SumCategories extends Component{
    sumByCategoriesObj = () => {
        // debugger
        let table = {}
        this.props.data.forEach(element => {
            if(table[element.category]){
                table[element.category] += element.amount
            }else{
                table[element.category] = element.amount
            }
        })
        return table
    }
    render(){
        const obj = this.sumByCategoriesObj()
        const arr = Object.keys(obj)
        const data = this.props.data
        return(
            <div>
                {arr.map(element => <div>{element} {obj[element]}</div>)}
            </div>
        )
    }
}

export default SumCategories