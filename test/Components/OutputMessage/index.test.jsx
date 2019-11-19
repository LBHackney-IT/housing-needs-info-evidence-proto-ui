import React from 'react';
import ReactDOMServer from 'react-dom/server';
import HousingRegisterMockData from '../../mock_data/housing_register_mock_data';
import OutputMessage from '../../../src/Components/OutputMessage';

describe('GenerateOutputMessage', function() {
  it('can generate the output message for an existing customer in the urgent band', async function() {
    const expected = ReactDOMServer.renderToStaticMarkup(
      <div>
        <p>You are in the URG band</p>
        <p>You are waiting for a 1 bedroom property</p>
        <p>The waiting list for this number of bedrooms looks like:</p>
        <p>Urgent: you are in position 319</p>
        <p>This means there are 318 people ahead of you in the list</p>
        <p>There were 1618 new properties last year of this size</p>
        <p>
          This means there were effectively 1618 new properties taking people
          off the list last year
        </p>
        <p>
          At that rate it will take 0 years 3 months for you to get to the top
          of your band and get a property
        </p>
      </div>
    );

    const outputMessage = ReactDOMServer.renderToStaticMarkup(
      <OutputMessage housingRegisterData={HousingRegisterMockData.URG} />
    );

    expect(outputMessage).toEqual(expected);
  });

  it('can generate the output message for an existing customer in the homeless + priority band', async function() {
    const expected = ReactDOMServer.renderToStaticMarkup(
      <div>
        <p>You are in the HOM band</p>
        <p>You are waiting for a 1 bedroom property</p>
        <p>The waiting list for this number of bedrooms looks like:</p>
        <p>Urgent: 331</p>
        <p>Homeless + Priority: you are in position 319</p>
        <p>This means there are 649 people ahead of you in the list</p>
        <p>There were 1618 new properties last year of this size</p>
        <p>There were 11 new people added to bands ahead of you last year</p>
        <p>
          This means there were effectively 1607 new properties taking people
          off the list last year
        </p>
        <p>
          At that rate it will take 0 years 5 months for you to get to the top
          of your band and get a property
        </p>
      </div>
    );

    const outputMessage = ReactDOMServer.renderToStaticMarkup(
      <OutputMessage housingRegisterData={HousingRegisterMockData.HOM} />
    );

    expect(outputMessage).toEqual(expected);
  });

  it('can generate the output message for an existing customer in the general band', async function() {
    const expected = ReactDOMServer.renderToStaticMarkup(
      <div>
        <p>You are in the GEN band</p>
        <p>You are waiting for a 1 bedroom property</p>
        <p>The waiting list for this number of bedrooms looks like:</p>
        <p>Urgent: 331</p>
        <p>Homeless + Priority: 833</p>
        <p>General: you are in position 319</p>
        <p>This means there are 1482 people ahead of you in the list</p>
        <p>There were 1618 new properties last year of this size</p>
        <p>There were 92 new people added to bands ahead of you last year</p>
        <p>
          This means there were effectively 1526 new properties taking people
          off the list last year
        </p>
        <p>
          At that rate it will take 1 years 0 months for you to get to the top
          of your band and get a property
        </p>
      </div>
    );

    const outputMessage = ReactDOMServer.renderToStaticMarkup(
      <OutputMessage housingRegisterData={HousingRegisterMockData.GEN} />
    );

    expect(outputMessage).toEqual(expected);
  });
});
