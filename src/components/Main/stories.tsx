import { Story, Meta } from '@storybook/react/types-6-0'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    Title: 'Title default',
    Description: 'Description default'
  }
} as Meta

export const Basic: Story = (args) => <Main {...args} />

export const Extra: Story = (args) => <Main {...args} />
Extra.args = {
  Title: 'Kluser Tecnologia',
  Description: 'JavaScript'
}
