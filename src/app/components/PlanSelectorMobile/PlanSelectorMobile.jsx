import { Select, InputLabel, MenuItem } from '@mui/material'

export function PlanSelectorMobile({ type }) {
  const handleChange = () => {}

  return (
    <div
      className={`md:hidden flex-col justify-center my-half ${
        type === 'in-person' ? 'hidden' : 'flex'
      }`}
    >
      <InputLabel id='plans' className='self-center'>
        Choose a plan!
      </InputLabel>
      <Select
        labelId='plans'
        id='plans'
        value='Plans'
        label='Plan'
        onChange={handleChange}
        MenuProps={{
          PaperProps: {
            sx: {
              background: '#000',
              color: '#F1F1F1'
            }
          }
        }}
      >
        <MenuItem value='monthly'>Monthly</MenuItem>
        <MenuItem value='3-months'>3 Months</MenuItem>
        <MenuItem value='6-months'>6 Months</MenuItem>
        <MenuItem value='annual'>Annual</MenuItem>
      </Select>
    </div>
  )
}
