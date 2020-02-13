// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {$ID, IDMappedObjects, RelationOneToOne} from './utilities';
import {Team} from './teams';

export type ChannelCategoryType = 'favorites' | 'public' | 'private' | 'direct_messages' | 'custom';

export type ChannelCategory = {
    id: string;
    team_id: $ID<Team>;
    type: ChannelCategoryType;
    display_name: string;

    // channel_ids: $ID<Channel>;
};

export type ChannelCategoriesState = {
    byId: IDMappedObjects<ChannelCategory>;
    collapsedById: RelationOneToOne<ChannelCategory, boolean>;
    orderByTeam: RelationOneToOne<Team, $ID<ChannelCategory>[]>;
};
