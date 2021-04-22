import * as React from 'react';
import { connect } from 'react-redux';
import { updateAlgos, updateCodeAlgo } from '../actions/actions';
import { UserObject, algorithms } from '../constants';
import { useHistory } from 'react-router-dom';

function Profile(props: any) {
  // const copyState= props.user.algorithms
  const history = useHistory();

  const handleClick = (el: algorithms) => {
    console.log('hi', props.codeState);
    props.updateCodeAlgo(el);
    history.push('/main');


    // const newEl = { ...el, solved: !el.solved };
    // const filteredAlgos = props.algos.filter(
    //   (algo: algorithms) => algo._id !== el._id
    // );
    // props.updateAlgos([...filteredAlgos, newEl]);
    // const bod = {
    //   user_id: props.user._id,
    //   algorithm_id: el._id,
    // };
    // fetch('/algos/solve', {
    //   method: 'POST',
    //   headers: { 'content-type': 'application/json' },
    //   body: JSON.stringify(bod),
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data))
    //   .catch((err) => console.log('err from Profile ', err));
  };

  function displayAlgos(solve: boolean) {
    let list;
    if (!solve) {
      const unsolvedlist = props.algos.filter((el: any) => {
        if (!el.solved) return el;
      });
      list = unsolvedlist;
    } else {
      const solvedList = props.algos.filter((el: algorithms) => {
        if (el.solved) return el;
      });
      list = solvedList;
    }

    return list.map((el: algorithms, i: number) => {
      return (
        <div key={`${el.name}1`}>
          {/* <input
            // type="checkbox"
            id={`${el._id}`}
            // className="solved"
            
            value={`${el.solved}`}
          /> */}
          <label onClick={() => handleClick(el)}  id={`${el._id}`}> {el.name}</label>
        </div>
      );
    });
  }

  return (
    <div>
      <h1 id="huh">Profile </h1>
      <h2>Hi there {props.user.username} get dat AlgoLife </h2>
      <div>
        <form>
          <h3>completed dat Algo</h3>
          <label> {props.user.algoName}</label>
          <h4> check to move to Unsolved</h4>
          {displayAlgos(true)}
        </form>
      </div>
      <br></br>
      <div>
        <h3>Unsolved Algo </h3>
        <h4>check to solve</h4>
        {displayAlgos(false)}
      </div>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  user: state.user,
  algos: state.user.algorithms,
  algoName: state.user.algorithms.name,
  codeState: state.code.curAlgo,
});

const mapDispatchToProps = (dispatch: any) => ({
  updateCodeAlgo: (algoInfo: algorithms) => dispatch(updateCodeAlgo(algoInfo)),
  updateAlgos: (algoInfo: Array<algorithms>) => dispatch(updateAlgos(algoInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
