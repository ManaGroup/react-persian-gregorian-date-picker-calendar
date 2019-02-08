import React from 'react';
import moment from 'moment';
import jmoment from 'moment-jalaali'
import PropTypes from 'prop-types'
const EN_FA = 'en';
const INVALID_DATE = 'Invalid date​​​​​';
//const dateFormat='YYYY-MM-DD'


class DaysOfWeek extends React.Component{


    render(){

        if(this.props.type==='fa')
            return(
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={styles.dayHeader}>شنبه</div>
                        <div style={styles.dayHeader}>یکشنبه</div>
                        <div style={styles.dayHeader}>دوشنبه</div>
                        <div style={styles.dayHeader}>سه‌شنبه</div>
                        <div style={styles.dayHeader}>چهارشنبه</div>
                        <div style={styles.dayHeader}>پنج‌شنبه</div>
                        <div style={styles.dayHeader}>جمعه</div>
                    </div>
            )
        else 
            return(
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={styles.dayHeader}>Sat</div>
                        <div style={styles.dayHeader}>Sun</div>
                        <div style={styles.dayHeader}>Mon</div>
                        <div style={styles.dayHeader}>Thu</div>
                        <div style={styles.dayHeader}>Wed</div>
                        <div style={styles.dayHeader}>Thu</div>
                        <div style={styles.dayHeader}>Fri</div>
                    </div>
            )

    }
    
}
class Langs extends React.Component{
    render(){
        return(
            <div style={styles.topMenuStyle}>
            <button style={(this.props.type==='en'?{backgroundColor:'blue'}:{})} onClick={()=>{

                if(this.props.type==='fa')
                this.props.changeMomentType('en')

                }}>{'english'}</button>

            <button style={(this.props.type==='fa'?{backgroundColor:'blue'}:{})} onClick={()=>{
                
                if(this.props.type==='en')
                this.props.changeMomentType('fa')
                
            }}>{'فارسی'}</button>
    </div>
        )
    }
   

}
class Day extends React.Component {

    state={
        isHover:false,
    }
    
	render() {
        
        //not valid day from this month
        if(this.props.disable)
            return <div style={{
                ...styles.notInThisMounth,
                ...{cursor:'not-allowed'}
            }}>X</div>;


            //gray past days
        if(this.props.realToday>this.props.date){

            return (
                <div style={
                    {...styles.dayInThisMounth,
                     ...{backgroundColor:'gray',cursor:'not-allowed'},
                    }
                 } 
                 >
                     <div>{this.props.date}</div>
                 </div>
            )
        
        }
        
        
        if(this.props.selectedDate2 && this.props.selectedDate1 && this.props.twoWay){

            if(this.props.selectedDate2===this.props.date){
                return(
                    <div 
                    style={{...styles.dayInThisMounth,
                        ...(this.props.selectedDate2===this.props.date?{backgroundColor:'#000cff',cursor:'pointer'}:{cursor:'pointer'}),
                        }} 

                    onMouseMove={()=>{
                        this.setState({isHover:true}) 
                        this.props.setHoverDate(this.props.date) 
                    }}
                    onMouseLeave={()=>{
                        this.setState({isHover:false})
                            this.props.setHoverDate(undefined) 
                    }}

                    onClick={()=>{

                        if(this.props.date<this.props.selectedDate1){
                            this.props.setSelectedDate(this.props.date)
                        }
                        else if(this.props.date>this.props.selectedDate1 
                            &&
                                this.props.date < this.props.selectedDate2){

                                this.props.setSelectedDate2(this.props.date)

                        } else if(this.props.date>this.props.selectedDate2){
                            
                            this.props.setSelectedDate2(this.props.date)

                        }else {

                            this.props.setSelectedDate2(this.props.date)
                        }


                    }}
                    >
                    <div>{this.props.date}</div>
                </div>
                )
            }
            return(
                <div 
                    style={{...styles.dayInThisMounth,
                        ...(this.props.selectedDate1===this.props.date?{backgroundColor:'#000cff',cursor:'pointer'}:{cursor:'pointer'}),
                        ...(
                            (
                            this.props.selectedDate2>this.props.date
                            &&
                            this.props.selectedDate2 >this.props.selectedDate1 
                            &&
                            this.props.date >this.props.selectedDate1 
                            )
                            ||
                            (
                                this.props.hoveredDate>this.props.selectedDate2 
                                &&
                                this.props.date<=this.props.hoveredDate 
                                &&
                                this.props.date>this.props.selectedDate2 
                            )
                           
                             ?{backgroundColor:'#56a2f6'}:{}),
                        }} 

                    onMouseMove={()=>{
                        this.setState({isHover:true}) 
                        this.props.setHoverDate(this.props.date) 
                    }}
                    onMouseLeave={()=>{
                        this.setState({isHover:false})
                            this.props.setHoverDate(undefined) 
                    }}

                    onClick={()=>{

                        if(this.props.date<this.props.selectedDate1){
                            this.props.setSelectedDate(this.props.date)
                        }
                        else if(this.props.date>this.props.selectedDate1 
                            &&
                                this.props.date < this.props.selectedDate2){

                                this.props.setSelectedDate2(this.props.date)

                        } else if(this.props.date>this.props.selectedDate2){
                            
                            this.props.setSelectedDate2(this.props.date)

                        }else {

                            this.props.setSelectedDate2(this.props.date)
                        }

                    }}
                    >
                    <div>{this.props.date}</div>
                </div>
            )
        } 

        if(this.props.selectedDate1){
            return(
                <div 
                    style={{...styles.dayInThisMounth,
                        ...(this.props.selectedDate1===this.props.date?{backgroundColor:'#000cff',cursor:'pointer'}:{cursor:'pointer'}),
                        ...(this.state.isHover?{backgroundColor:'#f00cff'}:{}),
                        ...(
                            this.props.hoveredDate>this.props.selectedDate1 
                            &&
                            this.props.date<=this.props.hoveredDate 
                            &&
                            this.props.date>this.props.selectedDate1 
                            && 
                            this.props.twoWay
                            
                            ?{backgroundColor:'#56a2f6'}:{}),
                        }} 
                    onMouseMove={()=>{
                        if(this.props.twoWay){
                            this.setState({isHover:true}) 
                            this.props.setHoverDate(this.props.date) 
                        }
                    }}
                    onMouseLeave={()=>{
                        if(this.props.twoWay){
                            this.setState({isHover:false})
                             this.props.setHoverDate(undefined) 
                        }
                    }}
                    onClick={()=>{
                    
                        if(this.props.twoWay){
                            if(this.props.date>this.props.selectedDate1){
                                this.props.setSelectedDate2(this.props.date)
                            }
                            else if(this.props.date<this.props.selectedDate1){
                                this.props.setSelectedDate(this.props.date)
                            }
                        }else{
                            this.props.setSelectedDate(this.props.date)
                        }
                        

                    
                    }}
                    >
                    <div>{this.props.date}</div>
                </div>
            )
        }
//normal day present
        return(
            <div style={
               {...styles.dayInThisMounth,
                ...(this.props.selectedDate1===this.props.date?{backgroundColor:'#000cff',cursor:'pointer'}:{cursor:'pointer'}),
                ...(this.state.isHover ?{backgroundColor:'#56a2f6'}:{}),
               }
            } 
            onMouseMove={()=>this.setState({isHover:true})}
            onMouseLeave={()=>this.setState({isHover:false})}
            onClick={()=>this.props.setSelectedDate(this.props.date)}
            
            >
                <div>{this.props.date}</div>
            </div>
        )
	}
}

class Calendar extends React.Component {
    constructor(props){
        super(props)
        moment.locale(this.props.EN_FA || EN_FA)
        this.state = {
            type:'fa',
            twoWay:this.props.twoWay || true,
            singleMode:this.props.singleMode || true,
            today: jmoment().format('jYYYY-jMM-jDD'),
            hoveredDate:undefined,
            showPopUp:(this.props.popUp===undefined?true:false),
            realToday: jmoment().format('jYYYY-jMM-jDD'),
            selectedDate1:undefined,
            selectedDate2:undefined,
            fullDateFormat:'jYYYY-jMM-jDD dddd jMMMM',
            dateFormat:'jYYYY-jMM-jDD',
            YYYY:'jYYYY',
            MMMM:'jMMMM',
        };

    }
    componentDidMount(){
        if(this.props.type==='en'){
            this.changeMomentType('en')
        }
    }
    addMonth=(date,plus=1)=>{

        
        if(this.state.type==='fa'){
            return jmoment(date,'jYYYY-jMM-jDD').add(plus,'month').format('jYYYY-jMM-jDD')
        }
        return moment(date,'YYYY-MM-DD').add(plus,'month').format('YYYY-MM-DD')
    }
    daysInMonth(YYYY, MM) {
        if(this.state.type==='en')
            return this.momentAdaptor(YYYY + '-' + MM + '-01').daysInMonth();
        else {//fa 
           
            const  jMonth=this.momentAdaptor(YYYY + '-' + MM + '-01').jMonth()

            if(jMonth<6)
                return 31
            if(jMonth<11)
                return 30
            if(jMonth===11 && this.momentAdaptor(YYYY + '-' + MM + '-01').isLeapYear())
                return 30
            else 
                return 29
            

        }
    }
    momentAdaptor=(date)=>{
        if(this.state.type==='fa'){
            return jmoment(date,'jYYYY-jMM-jDD')
        }
        return moment(date,'YYYY-MM-DD')
    }
    changeMomentType=(type='fa')=>{
        this.setState({
            type,
            today:(type==='fa'?jmoment().format('jYYYY-jMM-jDD'):moment().format('YYYY-MM-DD')),
            fullDateFormat:(type==='fa'?'jYYYY-jMM-jDD dddd jMMMM':'YYYY-MM-DD dddd MMMM'),
            YYYY:(type==='fa'?'jYYYY':'YYYY'),
            MMMM:(type==='fa'?'jMMMM':'MMMM'),
            dateFormat:(type==='fa'?'jYYYY-jMM-jDD':'YYYY-MM-DD'),
            realToday:jmoment(
                this.state.realToday,
                (type==='fa'?'YYYY-MM-DD':'jYYYY-jMM-jDD'))
                .format((type==='fa'?'jYYYY-jMM-jDD':'YYYY-MM-DD'))
        })      

        if(this.state.selectedDate1){
            this.setState({
                    selectedDate1:jmoment(this.state.selectedDate1,(type==='fa'?'YYYY-MM-DD':'jYYYY-jMM-jDD'))
                    .format((type==='fa'?'jYYYY-jMM-jDD':'YYYY-MM-DD')),
            })
        }
        if(this.state.selectedDate2){
            this.setState({
                selectedDate2:jmoment(this.state.selectedDate2,(type==='fa'?'YYYY-MM-DD':'jYYYY-jMM-jDD'))
                .format((type==='fa'?'jYYYY-jMM-jDD':'YYYY-MM-DD')),
        })
        }
    }
	getFullFirstOfDate = (today) => {
		const [ date ] = today.split(' ');
		const [ YYYY, MM ] = date.split('-');
		return this.momentAdaptor(YYYY + '-' + MM + '-01').add(0, 'day').format(this.state.fullDateFormat);
	};
	getNameOfDate = (d) => {
		return d.split(' ')[1];
	};
	fillAllMounth = (firstOfMounth) => {
        const [ YYYY, MM ] = firstOfMounth.split('-');

       
		return [ ...new Array(this.daysInMonth(YYYY, MM)).keys() ]
			.map((nextSteps) => {
				const nextStep = this.momentAdaptor(YYYY + '-' + MM + '-01')
					.add(nextSteps, 'day')
					.format(this.state.fullDateFormat);

				if (nextStep === INVALID_DATE) return undefined;
				else {
					const [ DATE,,] = nextStep.split(' ');
					return (
                        <Day 
                            setHoverDate={(hoveredDate)=>this.setState({hoveredDate})}
                            setSelectedDate={this.setSelectedDate} 
                            setSelectedDate2={this.setSelectedDate2}
                            hoveredDate={this.state.hoveredDate}
                            twoWay={this.state.twoWay}
                            selectedDate1={this.state.selectedDate1} 
                            selectedDate2={(this.state.twoWay?this.state.selectedDate2:undefined)} 
                            realToday={this.state.realToday}
                            date={DATE}/>
					);
				}
			})
			.filter((i) => i !== undefined);
	};
	getNameOfLastDayInMonth = (date) => {
        const [ _date ] = date.split(' ');
		const [ YYYY, MM ] = _date.split('-');
        
        let lastOfMounth = this.momentAdaptor(YYYY+'-'+MM+'-01')
        .add(1,this.state.type==="fa"?'jMonth':'month')
        .add(-1,'day')
        .format(this.state.fullDateFormat);
        
		return this.momentAdaptor(lastOfMounth).format('dddd');
    };
	fillUntillFriDay = (nameOfLastDate) => {
       
		let DateMap = [
			[ 6, 'Saturday' ],
			[ 5, 'Sunday' ],
			[ 4, 'Monday' ],
			[ 3, 'Tuesday' ],
			[ 2, 'Wednesday' ],
			[ 1, 'Thursday' ],
			[ 0, 'Friday' ]
        ];


		let CountOfEmpty = DateMap.filter((i) => i[1] === nameOfLastDate)[0][0];
		let x = new Array(CountOfEmpty).fill('X').map((i) => {
			return <Day disable/>;
		});
		return x;
	};
	fillBetweenSaturday = (nameOfFirstDate) => {

		let DateMap = [
			[ 0, 'Saturday' ],
			[ 1, 'Sunday' ],
			[ 2, 'Monday' ],
			[ 3, 'Tuesday' ],
			[ 4, 'Wednesday' ],
			[ 5, 'Thursday' ],
			[ 6, 'Friday' ]
        ];
        
		let CountOfEmpty = DateMap.filter((i) => i[1] === nameOfFirstDate)[0][0];
		let x = new Array(CountOfEmpty).fill('X').map((i) => {
			return <Day  disable />;
		});
		return x;
    };
    renderTopMenu=(dateFormat)=>{
        return(
            <React.Fragment>
                <input type='button' value={'reset'} 
                        onClick={()=>this.setState({
                        selectedDate1:undefined,
                        selectedDate2:undefined,
                    })} />

                <input type='button' value={'X'} 
                        onClick={()=>this.setState({showPopUp:false})} />
                
                <Langs type={this.state.type} changeMomentType={this.changeMomentType}/>

                <div style={styles.topMenuStyle}>
                        <button onClick={()=>{
                            this.setState({
                               today: this.momentAdaptor(this.state.today).add(-1, 'year').format(dateFormat)
                            })
                        }}>{'<'}</button>
                        <p>{this.momentAdaptor(this.state.today).format(this.state.YYYY)}</p>
                        <button onClick={()=>{
                            this.setState({
                                today:this.momentAdaptor(this.state.today).add(+1, 'year').format(dateFormat)
                            })
                        }}>{'>'}</button>
                </div>
                <div style={styles.topMenuStyle}>
                        <button 
                        style={!this.state.twoWay?{backgroundColor:'blue'}:{}}
                        onClick={()=>{
                            this.setState({
                               twoWay: false
                            })
                        }}>{'oneWay'}</button>
                        <button
                        style={this.state.twoWay?{backgroundColor:'blue'}:{}}
                        onClick={()=>{
                            this.setState({
                                twoWay:true
                            })
                        }}>{'twoWay'}</button>
                </div>
                <div style={styles.topMenuStyle}>
                        <button onClick={()=>{
                            this.setState({
                               today: this.momentAdaptor(this.state.today).add(-1, 'month').format(dateFormat)
                            })
                        }}>{'<'}</button>
                        <p>{this.momentAdaptor(this.state.today).format(this.state.MMMM)}</p>
                        <button onClick={()=>{
                            this.setState({
                                today:this.momentAdaptor(this.state.today).add(+1, 'month').format(dateFormat)
                            })
                        }}>{'>'}</button>
                </div>
                <div style={styles.topMenuStyle}>
                        <button 
                        style={this.state.singleMode?{backgroundColor:'blue'}:{}}
                        onClick={()=>{
                            this.setState({
                               singleMode:true,
                            })
                        }}>{'singleMode'}</button>
                       
                        <button 
                        style={!this.state.singleMode?{backgroundColor:'blue'}:{}}
                        onClick={()=>{
                            this.setState({
                                singleMode:false
                            })
                        }}>{'double'}</button>
                </div>
            </React.Fragment>
        )
    }
    renderMonth=(plus)=>{
        let today = ''
        if(this.state.type==='en')
                today=this.momentAdaptor(this.state.today).format(this.state.fullDateFormat);
        else 
            today=this.state.today

            today=this.addMonth(today,plus)

        const firstOfMounth = this.getFullFirstOfDate(today); //2019-03-01 saturday febre
        const nameOfFirstDate = this.getNameOfDate(firstOfMounth);
        const nameOfLastDate = this.getNameOfLastDayInMonth(firstOfMounth);
        let _BETWEEN_SATURDAY_ = this.fillBetweenSaturday(nameOfFirstDate);
        let _DAYS_IN_MONTH_ = this.fillAllMounth(firstOfMounth);
        let _UNTIL_FRIDAY_ = this.fillUntillFriDay(nameOfLastDate);

        return [ ..._BETWEEN_SATURDAY_, ..._DAYS_IN_MONTH_, ..._UNTIL_FRIDAY_ ];
    }
    renderNMonthAfterToday=(plus)=>{
        return(
            <div style={{display:'flex',flexDirection:'column'}}>

                <DaysOfWeek type={this.state.type}/>
                <div style={styles.calendarContainer}>
                    {this.renderMonth(plus)}
                </div>
            
            </div>
        )
    }
    togglePopUp=()=>{
        if(this.props.popUp!==undefined){
            this.setState({showPopUp:!this.state.showPopUp})
        }else{
            this.setState({showPopUp:true})
        }

    }
    renderPopUp=()=>{
        return(
            <React.Fragment>
                {this.renderTopMenu(this.state.dateFormat)}
                <div style={{display:'flex',flexDirection:'row'}}>
                    {this.renderNMonthAfterToday(0)}
                    {!this.state.singleMode && this.renderNMonthAfterToday(1)}
                </div>
            </React.Fragment>
        )
    }
	render() {

		return (
			<div style={styles.mainContainer}>
                <input type='text' 
                    value={this.state.selectedDate1}  
                    onClick={()=>this.togglePopUp()} />

                {this.state.twoWay && <input type='text' value={this.state.selectedDate2}  />} 
                {
                    this.state.showPopUp && this.renderPopUp()
                } 
                

			</div>
		);
    }
    generalizeDate=(date)=>{
        if(this.state.type==='fa')
            return({
                fa:date,
                en:jmoment(date,'jYYYY-jMM-jDD').format('YYYY-MM-DD'),
            })
        else 
            return({
                fa:jmoment(date,'YYYY-MM-DD').format('jYYYY-jMM-jDD'),
                en:date,
            })
    }
    setSelectedDate=(selectedDate1)=>{
        this.setState({selectedDate1})
        this.props.onSelectDate(selectedDate1)
        this.props.onSelectObjectDate && this.props.onSelectObjectDate(this.generalizeDate(selectedDate1))
        this.props.autoClose && !this.state.twoWay && this.setState({showPopUp:false})
    }
    setSelectedDate2=(selectedDate2)=>{
        this.setState({selectedDate2})
        this.props.onSelectDate2 && this.props.onSelectDate2(selectedDate2)
        this.props.onSelectObjectDate2 && this.props.onSelectObjectDate2(this.generalizeDate(selectedDate2))
        this.props.autoClose && this.state.twoWay && this.setState({showPopUp:false})
    }


}
Calendar.propTypes={
    popUp:PropTypes.bool,
    autoClose:PropTypes.bool,
    type:PropTypes.oneOf(['fa','en']),
    onSelectDate:PropTypes.func.isRequired,
    onSelectDate2:PropTypes.func,
    onSelectObjectDate:PropTypes.func,
    onSelectObjectDate2:PropTypes.func,

}
const styles = {
    mainContainer:{
            direction: 'rtl',
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center'
    },
    topMenuStyle:{    
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:'17px',
        paddingVertival:'0px',
        width:'400px'
    },
	dayHeader: {
		display: 'flex',
		margin: '1px',
		width: '50px',
		height: '50px',
		backgroundColor: 'yellow',
		justifyContent: 'center',
		alignItems: 'center'
	},
	dayInThisMounth: {
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		margin: '1px',
		width: '50px',
		height: '50px',
		backgroundColor: 'green',
		justifyContent: 'center',
		alignItems: 'center'
	},
	notInThisMounth: {
		display: 'flex',
		margin: '1px',
		width: '50px',
		height: '50px',
		backgroundColor: 'red',
		justifyContent: 'center',
		alignItems: 'center'
	},
	calendarContainer: {
		fontSize: '10px',
		width: '400px',
		height: '250px',
		display: 'flex',
		padding: '17px',
		flexWrap: 'wrap',
		flexDirection: 'row'
	}
};

class ShowCalendar extends React.Component {
    render(){

        return (<Calendar
                popUp
                autoClose
                twoWay={true}
                singleMode={true}
                onSelectDate={(d)=>{}}
                onSelectObjectDate={(d)=>alert(JSON.stringify(d))}
                onSelectObjectDate2={(d)=>alert(JSON.stringify(d))}
            />)
    }

}

export default ShowCalendar;
