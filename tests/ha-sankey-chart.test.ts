import { html, fixture, expect } from '@open-wc/testing';

import '../dist/ha-sankey-chart';
import { SankeyChart } from '../src/ha-sankey-chart';
import { SankeyChartConfig } from '../src/types';

const hass = {
  states: {
    ent1: {
      entity_id: 'ent1',
      state: 2,
      attributes: {
        unit_of_measurement: 'W',
      },
    },
    ent2: {
      entity_id: 'ent2',
      state: 1,
      attributes: {
        unit_of_measurement: 'W',
      },
    },
    ent3: {
      entity_id: 'ent3',
      state: 1,
      attributes: {
        unit_of_measurement: 'W',
      },
    },
  }
};

describe('SankeyChart', () => {
  it('matches an empty snapshot', async () => {
    const config: SankeyChartConfig = {
      type: '',
      sections: [{entities: [{
        entity_id: 'ent1',
        children: ['ent2', 'ent3'],
      }]}, {entities: ['ent2', 'ent3']}],
    };
    const el = await fixture<SankeyChart>(html`
      <sankey-chart .hass=${hass}></sankey-chart>
    `);
    await el.setConfig(config)

    await expect(el).shadowDom.to.equalSnapshot();
  });
});