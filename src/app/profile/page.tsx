import { Demo } from "./demo";

export default function Profile(){
    return <div>
        <h1>Profile</h1>
        <p>Hello world</p>
        <Demo name={'helal'} age={18}></Demo>
        <Demo name={"shavo"} age={18}></Demo>
    </div>
}