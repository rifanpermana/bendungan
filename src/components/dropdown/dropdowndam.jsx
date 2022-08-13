import Select from 'react-select'

/* reference */
// https://react-select.com/home
// https://www.youtube.com/watch?v=n02t9wvd6hs
// https://react-select.com/styles
// https://www.cluemediator.com/how-to-get-selected-by-only-value-in-react-select

const customStyles = {
  control: (base, state) => ({
    ...base,
    background: 'var(--color-base)',
    boxShadow:'none',
    borderColor: 'transparent',
    "&:hover": {
      borderColor: 'transparent',
    },
  }),
  menu: base => ({
    ...base,
    marginTop: 0,
  }),
  menuList: base => ({
    ...base,
    backgroundColor: 'var(--color-base)',
    borderRadius: '4px',
  }),
  option: (provided, state) => ({
    ...provided,
    color: 'white',
    "&:hover": {
      background: 'var(--color-nav)',
    },
    borderRadius: '4px',
    backgroundColor: state.isFocused ? 'var(--color-nav)' : null,
  }),
  singleValue: provided => ({
    ...provided,
    color: 'white',
  }),
  placeholder: provided => ({
    ...provided,
    color: '#64748B',
  }),
  input: provided => ({
    ...provided,
    color: 'white',
  }),
  menuPortal: base => ({
    ...base,
  }),
};

let options = [
  { value: 'semua', label: 'Semua' },
  { value: 'grup-1', label: 'grup: Jawa Barat' },
  { value: 'grup-2', label: 'grup: Jawa Timur' },
  { value: 'grup-3', label: 'grup: Pengawasan' },
  { value: 'grup-4', label: 'grup: Waspada' },
  { value: 'dam-1', label: 'Waduk  Jatiluhur' },
  { value: 'dam-2', label: 'Waduk  Jatigede' },
  { value: 'dam-3', label: 'Waduk Cirata' },
  { value: 'dam-4', label: 'Waduk Karian' },
  { value: 'dam-5', label: 'Waduk Kuningan' },
  { value: 'dam-6', label: 'Waduk Darma' },
  { value: 'dam-7', label: 'Waduk Saguling' },
  { value: 'dam-8', label: 'Waduk Ciawi' },
  { value: 'dam-9', label: 'Waduk Sukamahi' },
  { value: 'dam-10', label: 'Waduk Sadawarna' },
  { value: 'dam-11', label: 'Waduk Bening' },
  { value: 'dam-12', label: 'Danau Ranu Grati' },
  { value: 'dam-13', label: 'Bendungan Wonorejo' },
  { value: 'dam-14', label: 'Waduk Gerak Watu Turi' },
  { value: 'dam-15', label: 'Waduk Gondang' },
  { value: 'dam-16', label: 'Waduk Bajul Mati' },
  { value: 'dam-17', label: 'Waduk Coban Talun' },
]

function DropdownDam ({onChange, state}){
  return(
    <>
    <Select 
      //defaultValue={options[0]} //{ value: 'semua', label: 'Semua' }
      styles={customStyles}
      options={options} 
      value={state}
      // isClearable={true}
      // menuPortalTarget={document.body} 
      menuPosition={'fixed'}
      onChange={onChange}
      // menuIsOpen={true}
      // theme={(theme) => ({
      //   ...theme,
      //   borderRadius: 4,
      //   colors: {
      //   ...theme.colors,
      //     text: 'red',
      //     primary: '',
      //     primary75: '#4C9AFF',
      //     primary50: '#B2D4FF',
      //     primary25: '#DEEBFF',
      //     danger: '#DE350B',
      //     dangerLight: '#FFBDAD',
      //     neutral0: 'hsl(0, 0%, 100%)',
      //     neutral5: 'hsl(0, 0%, 95%)',
      //     neutral10: 'hsl(0, 0%, 90%)',
      //     neutral20: 'hsl(0, 0%, 80%)',
      //     neutral30: 'hsl(0, 0%, 70%)',
      //     neutral40: 'hsl(0, 0%, 60%)',
      //     neutral50: 'hsl(0, 0%, 50%)',
      //     neutral60: 'hsl(0, 0%, 40%)',
      //     neutral70: 'hsl(0, 0%, 30%)',
      //     neutral80: 'hsl(0, 0%, 20%)',
      //     neutral90: 'hsl(0, 0%, 10%)',
      //   },
      // })}
      placeholder='Cari ....'
    />
    </>
  );
}

export default DropdownDam