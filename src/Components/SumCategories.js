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
        return Object.entries(table)
    }
    render(){
        const arr = this.sumByCategoriesObj()
        const data = this.props.data
        return(
            <div>
                {arr.map(element => <div>{element[0]} {element[1]}</div>)}
            </div>
        )
    }
}

export default SumCategories