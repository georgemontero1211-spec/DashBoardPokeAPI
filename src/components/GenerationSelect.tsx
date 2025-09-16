import { Combobox, Input, InputBase, useCombobox } from '@mantine/core';
import { useState } from 'react';

const generations = [
    'Primera Generación',
    'Segunda Generación',
    'Tercera Generación',
    'Cuarta Generación',
    'Quinta Generación',
    'Sexta Generación',
    'Séptima Generación',
    'Octava Generación',
    'Novena Generación',

];

export function GenerationSelect() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState<string | null>(null);

  const options = generations.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      withinPortal={false}
      onOptionSubmit={(val) => {
        setValue(val);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
          component="button"
          type="button"
          pointer
          rightSection={<Combobox.Chevron />}
          onClick={() => combobox.toggleDropdown()}
          rightSectionPointerEvents="none"
        >
          {value || <Input.Placeholder>Chouse a generation</Input.Placeholder>}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}