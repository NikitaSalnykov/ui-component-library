import React, { useState } from 'react';

import { Select } from '@/components/Select';
import { Card, VariantGrid } from '@/components';

export const SelectShowcase: React.FC = () => {
  const [role, setRole] = useState<string | null>(null);
  const [tags, setTags] = useState<string[]>([]);

  const options = [
    { label: 'User', value: 'user' },
    { label: 'Moderator', value: 'moderator' },
    { label: 'Admin', value: 'admin' },
  ];
  return (
    <VariantGrid>
      <Card title={'Вибір одного варіанту'}>
        {' '}
        <Select
          options={options}
          value={role}
          onChange={setRole}
          placeholder="Choose role"
        />
      </Card>
      <Card title="Мульті вибір">
        <Select
          options={options}
          value={tags}
          onChange={setTags}
          multiple
          placeholder="Choose many"
        />
      </Card>
    </VariantGrid>
  );
};

export default SelectShowcase;
