import ArcRight from './ArcRight';

function ArcCircleRight(props: any) {
  return (
    <>
      <ArcRight innerRadius={props.innerRadius} outerRadius={props.outerRadius} color={props.color} thetaStart={0} thetaLength={props.thetaLength} />
      <ArcRight innerRadius={props.innerRadius} outerRadius={props.outerRadius} color={props.color} thetaStart={Math.PI / 2} thetaLength={props.thetaLength} />
      <ArcRight innerRadius={props.innerRadius} outerRadius={props.outerRadius} color={props.color} thetaStart={Math.PI} thetaLength={props.thetaLength} />
      <ArcRight innerRadius={props.innerRadius} outerRadius={props.outerRadius} color={props.color} thetaStart={Math.PI * 3 / 2} thetaLength={props.thetaLength} />
      <ArcRight innerRadius={props.innerRadius} outerRadius={props.outerRadius} color={props.color} thetaStart={Math.PI * 2} thetaLength={props.thetaLength} />
    </>
  );
}

export default ArcCircleRight;