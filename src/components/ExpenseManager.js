import React, { useState } from 'react'
import '../css/ExpenseManager.css'

const ExpenseManager = () => {
     
    //=============== STATES ====================//
     const [totalBalance ,setTotalBalance]  = useState(0);
     const [totalIncome, setTotalIncome]  = useState(0);
     const [totalExpense, setTotalExpense] = useState(0);
     const [flag,setFlag] = useState(true)
     const [cart , setCart] = useState([]);
     const [editflag, seteditflag] = useState(true);
     const [index1,setindex1]=useState();
     const [grocerry, setGrocerry] = useState(0);
     const [veggies, setVeggies] = useState(0);
     const [travelling, setTravelling] = useState(0);
     const [miscallneous, setMiscallneous] = useState(0);


     //=============== GLOBAL VARIABLE AND ARRAY =====================//

    let totalincome = 0;
    let totalbalance = 0;
    let totalexpense = 0;
    let arr1 = [];
 
//<================ ADD INCOME  FUNCTION =========================>

    const addIncome = () =>{  
        let income_val = document.getElementById('add_income').value;
        if(income_val === ''){
            alert('please add money...')
        }
        else{

        if(flag){
         totalincome = (parseInt(totalincome) + parseInt(income_val));
         totalbalance = (parseInt(totalincome) - parseInt(totalExpense))
         setTotalIncome(totalIncome + totalincome);
         setTotalBalance(totalBalance + totalbalance);
        }
        else{
            let total_incomes  = parseInt(income_val) + totalIncome;
            let total_balances = total_incomes - totalExpense;
            setTotalIncome(total_incomes);
            setTotalBalance(total_balances);
        }
      }
    }
//<================ ADD EXPENSES FUNCTION =========================>
    const AddProduct = () =>{
    
       let expense_val = document.getElementById('item-amount').value;
       let text = document.getElementById('item').value;
       let option_val = document.getElementById('select').value;
       let date = document.getElementById('date').value;
       setFlag(false);
       let obj = {expense_val:expense_val,text:text,option_val:option_val,date:date}
       if(expense_val === '' || text === '' || option_val === '' || date === ''){
        alert("plese fill all the details..")
       }
       else{
        if(option_val === 'grocery'){
         arr1.push(obj)
         let total = 0;
         arr1.forEach((val)=>{
           if(val.option_val === 'grocery'){
                if(editflag){
               
                totalexpense = totalexpense + parseInt(val.expense_val);
                setGrocerry(grocerry + totalexpense)
                setTotalExpense(totalExpense + totalexpense);
                setTotalBalance(totalBalance - parseInt(totalexpense));
                setCart([...cart,obj])
                }
                else{
                    let x = 0;
                    cart.forEach((val)=>{
                       x = x + parseInt(val.expense_val);
                    })
                    console.log(x);
                    setTotalExpense(x);
                    setTotalBalance(totalIncome - x);
                    let temp = cart;
                    temp.splice(index1,1,obj);
                    setFlag(true);
                //    let del = parseInt(obj.expense_val);
                //    setGrocerry(del);
                //    setTotalExpense(del);
                //    setTotalBalance(totalIncome - del);
                //    let temp = cart;
                //    temp.splice(index1,1,obj);
                //    seteditflag(true);

                //    totalexpense = totalexpense + del;
                //    setTotalExpense(totalExpense + totalexpense);
                //    setTotalBalance(totalIncome -totalexpense);
               }
            }
        })
        }
       else if(option_val === 'veggies'){
        arr1.push(obj)
        arr1.forEach((val)=>{
           
             if(val.option_val === 'veggies'){
                if(editflag){
                    totalexpense = totalexpense + parseInt(val.expense_val);
                    setVeggies(veggies + totalexpense);
                    setTotalExpense(totalExpense + totalexpense);
                    setTotalBalance(totalBalance - parseInt(totalexpense));
                    setCart([...cart,obj])
                }
                else{

                    let x = 0;
                    cart.forEach((val)=>{
                       x = x + parseInt(val.expense_val);
                    })
                    console.log(x);
                    setTotalExpense(x);
                    setTotalBalance(totalIncome- x);
                    let temp = cart;
                    temp.splice(index1,1,obj);
                    setFlag(true);
                //    let del = parseInt(obj.expense_val);
                //    setVeggies(del);
                //    setTotalExpense(del);
                //    setTotalBalance(totalIncome - del);
                //    let temp = cart;
                //    temp.splice(index1,1,obj);
                //    seteditflag(true);

                //    totalexpense = totalexpense + del;
                //    setTotalExpense(totalExpense + totalexpense);
                //    setTotalBalance(totalIncome -totalexpense);
                }
             
             }
         })
         
       }
       else if(option_val === 'travelling'){
        arr1.push(obj)
        arr1.forEach((val)=>{
           if(val.option_val === 'travelling'){
             if(editflag){
                totalexpense = totalexpense + parseInt(val.expense_val);
                setTravelling(travelling + totalexpense);
                setTotalExpense(totalExpense + totalexpense);
                setTotalBalance(totalBalance - parseInt(totalexpense));
                setCart([...cart,obj])
             }
             else{
                let x = 0;
                cart.forEach((val)=>{
                   x = x + parseInt(val.expense_val);
                })
                console.log(x);
                setTotalExpense(x);
                setTotalBalance(totalIncome - x);
                let temp = cart;
                temp.splice(index1,1,obj);
                setFlag(true);
                // let del = parseInt(obj.expense_val);
                // setTravelling(del);
                // setTotalExpense(del);
                // setTotalBalance(totalIncome - del);
                // let temp = cart;
                // temp.splice(index1,1,obj);
                // seteditflag(true);

                // totalexpense = totalexpense + del;
                // setTotalExpense(totalExpense + totalexpense);
                // setTotalBalance(totalIncome -totalexpense);
             }
            
             }
         })
         }
       else if(option_val === 'miscllaneous'){
       arr1.push(obj)
       arr1.forEach((val)=>{
           if(val.option_val === 'miscllaneous'){
               if(editflag){
                totalexpense = totalexpense + parseInt(val.expense_val);
                setMiscallneous(miscallneous + totalexpense);
                setTotalExpense(totalExpense + totalexpense);
                setTotalBalance(totalBalance - parseInt(totalexpense));
                setCart([...cart,obj])
               }
               else{
                let x = 0;
                cart.forEach((val)=>{
                   x = x + parseInt(val.expense_val);
                })
                console.log(x);
                setTotalExpense(x);
                setTotalBalance(totalIncome - x);
                let temp = cart;
                temp.splice(index1,1,obj);
                setFlag(true);
                // let del = parseInt(obj.expense_val);
                // setMiscallneous(del);
                // setTotalExpense(del);
                // setTotalBalance(totalIncome - del);
                // let temp = cart;
                // temp.splice(index1,1,obj);
                // seteditflag(true);

                // totalexpense = totalexpense + del;
                // setTotalExpense(totalExpense + totalexpense);
                // setTotalBalance(totalIncome -totalexpense);
               }
              
            }
        })
     }
       else{
        alert('please select category..')
       }
    }
  }
  //<================ DELETE FUNCTION =========================>
    const DeleteExpense = (index) =>{
        let option = cart[index].option_val;
        let deleted_amount = cart[index].expense_val;
        let amnt = totalExpense - parseInt(deleted_amount);
        setTotalExpense(amnt);
        setTotalBalance(totalIncome - amnt)
        let temp = cart;
        temp.splice(index,1);
        setCart([...temp])

        // if(option === 'grocery')
        // {
        //  setGrocerry(0);
        // }
        // else if(option === 'veggies'){
        //   setVeggies(0);
        // }
        // else if(option === 'travelling'){
        //   setTravelling(0);
        // }
        // else if(option === 'miscllaneous'){
        //    setMiscallneous(0);
        // }
        
    }
//<================ EDIT FUNCTION =========================>
    const EditExpense = (index) =>{
      setindex1(index)
      let txt = cart[index].text;
      let option = cart[index].option_val;
      let expense_value = cart[index].expense_val;
      document.getElementById('item-amount').value= expense_value;
      document.getElementById('item').value = txt;
    //   if(option === 'grocery')
    //   {
    //    setGrocerry(0);
    //   }
    //   else if(option === 'veggies'){
    //     setVeggies(0);
    //   }
    //   else if(option === 'travelling'){
    //     setTravelling(0);
    //   }
    //   else if(option === 'miscllaneous'){
    //      setMiscallneous(0);
    //   }
      
      seteditflag(false);
      window.scrollTo(0,0);
   }

//<================ RENDERING  =========================>
  return (
    <>
      <div className="main">
            <div id="heading">
                <h1>EXPENSE MANAGER</h1>
            </div>
            <hr></hr>
            <div>
           <div style={{marginLeft:"12px"}}>
           <label id="lb-1">ADD YOUR INCOME : </label><input type='number' id="add_income" placeholder='write amount here'/>  <button id="add_btn" onClick={addIncome}>ADD INCOME</button> <br></br>
            </div> 

            
            </div>
            <div className="container">

                    <div className="container-1">
                    <h2>ADD YOUR EXPENSES:</h2>
                    <div id="new-item">
                        <label style={{fontSize:"25px",fontWeight:"500"}}>Enter New Items:</label><br></br>
                        <input type='text' id="item" required/>
                    </div>

                    <div id="amount">
                        <label style={{fontSize:"25px",fontWeight:"500"}}>Enter Amount:</label><br></br>
                        <input type='number' id="item-amount" required/>

                    </div>
                    <span style={{fontSize:"26px"}}>select category:</span>
                    <select id="select">
                         <option value='0' >...Select by Category...</option>
                         <option value='grocery'>Groceries</option>
                         <option value='veggies'>veggies</option>
                         <option value='travelling'>Travelling</option>
                         <option value='miscllaneous'>Miscllaneous</option>

                    </select>
                    <span style={{fontSize:"26px"}}>select Date:</span>
                    <span ><input id="date" type='date'/></span>
                  </div>
                  <div className="container-2">
                    <h1>Your current balance: ₹ <span style={{color:"blue"}}>{totalBalance}</span></h1>
                      <br></br><br/>
                    <h2>Your total Income: ₹ <span style={{color:"green"}}>{totalIncome}</span></h2>
                    <h2>Your total Expense: ₹ <span style={{color:"red"}}>{totalExpense}</span></h2>
                  </div>
            </div>
         
           <div id="btn-div">
            <button id="btn" onClick={AddProduct}>Add Expense</button>
          </div>

           <hr></hr>
           <br></br>
          <div className="expense-detail" style={{marginLeft:"20px"}}>
                <h1 style={{textAlign:"center"}}>-:EXPENSE DEATAILS:-</h1>
   
                <hr></hr>
                <div><h1>Groceries</h1> <h1 style={{color:"red"}}>₹ {grocerry}</h1></div> <hr></hr>
                <div><h1>veggies</h1> <h1 style={{color:"red"}}>₹ {veggies}</h1></div> <hr></hr>
                <div><h1>Travelling</h1> <h1 style={{color:"red"}}>₹ {travelling}</h1></div> <hr></hr>
                <div> <h1>Miscllaneous</h1><h1 style={{color:"red"}}>₹ {miscallneous}</h1></div>

       </div>
          <hr></hr>
         <h2 style={{textAlign:"center"}}> click here to see the full transaction history</h2>
          <h4 style={{textAlign:"center"}}><button  style={{backgroundColor:"brown",height:"6.2vh",color:"white",fontSize:"23px",borderRadius:"6px"}}>HISTORY</button></h4>

          <div id="history" >
          {
             cart.map((val,index)=>{
                    return(
                        <>
                        <div id="disp">
                                <div>
                                  <h2 id="1">{val.text} <span style={{color:"green"}}> *{val.option_val}</span></h2>
                                   <span style={{fontSize:"25px",fontWeight:"bold"}}>Price:&emsp;</span><span id='prices'>{val.expense_val} ₹</span>
                                    <h2 id="3">Date: {val.date}</h2> 
                                </div>
                                <div id='update-div'>
                                    <button id="delete" onClick={()=>{DeleteExpense(index)}}>delete</button>
                                    <button id="edit" onClick={()=>{EditExpense(index)}}>edit</button>
                                </div>
                               
                        </div>
                         
                        </>
                    )
                   })
            }
          
          </div>
        </div>
    </>
  )
}

export default ExpenseManager

