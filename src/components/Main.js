import Input from "./Input"
import Content from "./Layouts/Content"

import { Icon } from "./utils/IconsUtils"

const Main = () =>
  <div className="main">
    <Content>
      <div className="flex-row">
        <Input placeholder='02.11.23' icon={ Icon('50d.png') } input_size='s' />
        <Input icon={ Icon('unknown.png') } input_size='m' icon_to_right />
        <Input icon={ Icon('01d.png') } input_size='m' />
        <Input icon={ Icon('03d.png') } input_size='m' icon_to_right />
        <Input icon={ Icon('04d.png') } input_size='s' />
        <Input icon={ Icon('04n.png') } input_size='m' icon_to_right />
        <Input icon={ Icon('11d.png') } input_size='m' />
        <Input icon={ Icon('13d.png') } input_size='m' icon_to_right />
        <Input icon={ Icon('13n.png') } input_size='l' />
        <Input icon={ Icon('10d.png') } input_size='l' icon_to_right />
        <Input icon={ Icon('10n.png') } input_size='l' />
        <Input icon={ Icon('10d.png') } input_size='l' icon_to_right />
      </div>
    </Content>
  </div>

export default Main