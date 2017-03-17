import React, { Component } from 'react'
import Colors from '../Theme/Colors'
import AppStyles from '../Theme/AppStyles'
import { inject, observer } from 'mobx-react'
import { join, is, map, merge, values } from 'ramda'
import ObjectTree from '../Shared/ObjectTree'
import { colorForValue, textForValue } from '../Shared/MakeTable'
import SagasHeader from './SagasHeader'

const Styles = {
  container: {
    ...AppStyles.Layout.vbox,
    margin: 0,
    flex: 1
  },
  watches: {
    margin: 0,
    padding: 0,
    overflowY: 'auto',
    overflowX: 'hidden'
  },
  saga: {
    ...AppStyles.Layout.hbox,
    padding: '15px 20px',
    justifyContent: 'space-between',
    borderBottom: `1px solid ${Colors.line}`
  },
  sagaEffect: {
    width: 125
  },
  sagaHierarchy: {
    width: 75
  },
  sagaDescription: {
    flex: 1,
    textAlign: 'left'
  },
  watchLeft: {
    flex: 0.3,
    wordBreak: 'break-all'
  },
  watchPath: {
    cursor: 'pointer',
    color: Colors.tag
  },
  watchValue: {
    flex: 0.7,
    wordBreak: 'break-all'
  },
  title: {
    color: Colors.tag
  }
}

const SagaRow = ({row}) => {
  const { name, description, status, effectId, parentEffectId } = row
  return (
    <div style={Styles.saga}>
      <div style={Styles.sagaHierarchy}>{ parentEffectId }.{ effectId }</div>
      <div style={Styles.sagaEffect}>{ name }</div>
      <div style={Styles.sagaDescription}>{ description }</div>
      <div>{ status }</div>
    </div>
  )
}

@inject('session')
@observer
class Sagas extends Component {

  render () {
    const tree = this.props.session.server.latestSagaTree
    const list = tree.length > 0
      ? map(row => (<SagaRow row={row} key={row.effectId} />), tree)
      : null
    return (
      <div style={Styles.container}>
        <SagasHeader />
        <div style={Styles.watches}>
          {list}
        </div>
      </div>
    )
  }
}

export default Sagas
