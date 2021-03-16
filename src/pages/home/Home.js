import React, { Component } from 'react';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = JSON.parse(localStorage.getItem('data')) || {
            companyName:"", 
            radioGroup: {
                businessType1: true,
                businessType2: false,
            },
            businessType3: false,
            status: "",
            type: "",
            subscribers: 0,
            unsubscribers: 0,
            compliance1: false,
            compliance2: false,
            join_route:0,
            uncollected:0,
            additionalEmployment1:0,
            additionalEmployment2:0,
            proA:0,
            proB:0,
            proC:0,
            note:"",
            totalMonthPay:0,
            monthExpense :0,
            totalExpense :0,
            maxCusProfit : 0,
        };
        this.handleDateChange = this.handleDateChange.bind(this);
    };

    handleChange = (e) => { 
        console.log(this.state);
        console.log("target : "+e.target.value+" / "+ this.state[e.target.id]);
        if(e.target.value==="on" && this.state[e.target.id]===false){
            this.setState({ 
                [e.target.id]: true,
            }); 
        }
        else if(e.target.value==="on" && this.state[e.target.id]===true){
            this.setState({ 
                [e.target.id]: false,
            }); 
        }
        else { 
            this.setState({ 
                [e.target.id]: e.target.value,
            }); 
        }
    };

    handleOnClick = async(e) => {
        console.log(this.state)
        await localStorage.setItem('data', JSON.stringify(this.state));
        this.props.history.push('/quote');
    }

    handleRadio = (event) => {
        let obj = {
                businessType1: false,
                businessType2: false,
        }
        console.log(event.target.value + '/'+event.target.checked );
        obj[event.target.id] = event.target.checked // true
        console.log(obj);
        this.setState({
            radioGroup: obj
        })
    }

    initOnClick = async(e) => {
        console.log("clicked!")
        this.setState({
            radioGroup: {
                businessType1: false,
                businessType2: false,
              },
            businessType3: false,
            status: "",
            type: "",
            companyName:"", 
            subscribers: 0,
            unsubscribers: 0,
            compliance1: false,
            compliance2: false,
            join_route:0,
            uncollected:0,
            additionalEmployment1:0,
            additionalEmployment2:0,
            proA:"",
            proB:"",
            proC:"",
            note:"",
            totalMonthPay:0,
            monthExpense :0,
            totalExpense :0,
            maxCusProfit : 0,
        },() => {localStorage.setItem('data', JSON.stringify(this.state));});
    }

    onClickForLink = () => {
        window.open('https://www.naver.com', '_blank') // url 이동
    }

    handleDateChange(date) {
        this.setState({
           startDate: date
        })   
    }
    
    render() {        
        return (
            <div>
            <h3>성공의 파트너, 투진컴퍼니</h3>

            <form className="AddSalesForm">
                <hr/>    
                <h3>사전 인터뷰</h3>
                <label>기업명 : <input type="text" id='companyName' value={this.state.companyName} onChange={this.handleChange}/></label><br/>
                <label>사업자 종류</label><br/>
                <label>
                    <input type="radio" name="radioGroup" id='businessType1'
                    checked={this.state.radioGroup['businessType1']} onChange={this.handleRadio}/>
                    개인사업자
                </label>
                <br/>
                <label>
                    <input type="radio" name="radioGroup" id='businessType2' checked={this.state.radioGroup['businessType2']} onChange={this.handleRadio}/>
                    법인사업자
                </label>
                <br/><br/>

                <label>업태 : <input type="text" id='status' value={this.state.status} onChange={this.handleChange}/></label><br/>
                <label>업종 : <input type="text" id='type' checked={this.state.type} onChange={this.handleChange}/></label><br/>
                
                <label>
                성장유망업종 여부 : <input type="checkbox" id='businessType3' checked={this.state.businessType3} onChange={this.handleChange}/>
                </label><br/>
                <label>성장유망업종이란?</label><br/>
                <label>설명</label><br/><br/>

                <label>기존 직원 정보를 입력해주세요</label><br/>
                <label>4대보험 가입인원<input type="number" id='subscribers' value={this.state.subscribers} onChange={this.handleChange}/></label> 
                <label>최저임금준수여부<input type="checkbox" id='compliance1' checked={this.state.compliance1} onChange={this.handleChange}/></label><br/>
                <label>4대보험 미가입인원 <input type="number" id='unsubscribers' value={this.state.unsubscribers} onChange={this.handleChange}/></label>
                <label>최저임금준수여부<input type="checkbox" id='compliance2' checked={this.state.compliance2} onChange={this.handleChange}/></label><br/><br/>
                <label>추가 고용 계획을 입력해주세요</label><br/>
                    <input type="number" id='additionalEmployment1' value={this.state.additionalEmployment1} onChange={this.handleChange}/><br/>
                    <input type="number" id='additionalEmployment2' value={this.state.additionalEmployment2} onChange={this.handleChange}/>
                <br/>
                <label>위 기업정보를 투진컴퍼니에서 활용하는데에 동의합니다.</label><br/><br/>
                <label>{/*<input type="checkbox" id='proA' checked={this.state.proA} onChange={this.handleChange}/>*/}프로그램A(1~6개월)</label><label> : 1인 당 최대 190만 원 </label><br />
                <label>{/*<input type="checkbox" id='proB' checked={this.state.proB} onChange={this.handleChange}/>*/}프로그램B(최대30개월)</label><label> : 1인 당 75만 원</label><br />
                <label>{/*<input type="checkbox" id='proC' checked={this.state.proC} onChange={this.handleChange}/>*/}프로그램C(최대30개월)</label><label> : 1인 당 8만 원</label><br />
                <br/><br/>
                <button type="button" onClick={this.onClickForLink}> 상담하기 </button><br/>
                <button type="button" onClick={this.handleOnClick}> 견적하기 </button><br/>
                <button type="button" onClick={this.initOnClick}> 초기화 </button><br/>
                <label>중소기업의 경영파트너, 투진컴퍼니</label>
            </form>
        </div>
        );
    }
}

export default Home;
