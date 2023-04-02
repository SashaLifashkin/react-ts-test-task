import { IconName, IconPrefix, library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import './MyIcon.css';

import {
    IconLookup,
    IconDefinition,
    findIconDefinition
} from '@fortawesome/fontawesome-svg-core';

library.add(fab, fas);

// const appleLookup: IconLookup = { prefix: 'fab', iconName: 'apple' };
// const appleIconDefinition: IconDefinition = findIconDefinition(appleLookup);

type Props = {
    iconName: string;
    prefix: string;
}

export const MyIcon: React.FC<Props> = ({ iconName, prefix }) => {
    const iconLookup: IconLookup = { prefix: prefix as IconPrefix, iconName: iconName as IconName };
    const iconDefinition: IconDefinition = findIconDefinition(iconLookup);

    return (
        <div className='my-icon'>
          <FontAwesomeIcon
            icon={iconDefinition}
            size='2x'
          />
        </div>
      );
};
