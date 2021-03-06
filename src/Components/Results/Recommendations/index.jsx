import React, { Component } from 'react';

export default class Recommendations extends Component {
  render() {
    let title = 'Our recommendation: Look at other solutions';
    let message =
      'To help you find settled accommodation as soon as possible, we can support you in finding a home in the private rented sector or through other social housing schemes.';
    let buttonText = 'View options';
    let content = (
      <div>
        <div className="row" style={{ marginBottom: '50px' }}>
          <h4>Find privately rented accommodation</h4>
          <p>
            Find out how to look for your own property, and how the Council may
            be able to assist your move
          </p>
          <details
            className="govuk-details lbh-details"
            data-module="govuk-details"
          >
            <summary className="govuk-details__summary2 govuk-button lbh-button">
              <span className="govuk-details__summary-text2">
                Find privately rented accommodation
              </span>
            </summary>
            <div className="govuk-details__text">
              <strong>
                If you decide to look for privately rented accommodation, the
                Council may be able to provide the following assistance:
              </strong>
              <ul>
                <li>1 month rent in advance</li>
                <li>Security deposit paid</li>
                <li>Landlord compliancy check</li>
                <li>Longest possible tenancy terms</li>
                <li>Pre-inspection of the property</li>
                <li>Practical and financial help with removals</li>
                <li>
                  Transport costs for viewing and moving it outside of London
                </li>
                <li>
                  Financial assistance to provide white goods if they are not
                  provided by the landlord
                </li>
              </ul>
              <div>
                <p>
                  <strong>Attend a training course</strong>
                </p>
                <p>
                  The Council provide free monthly tenancy training sessions for
                  those wishing to find their own accommodation. To enquire
                  about attending the next course, please contact us on 020 8356
                  4411.
                </p>
              </div>
            </div>
          </details>
        </div>
        <div className="row">
          <h4>Alternative social housing schemes</h4>
          <p>
            Depending on your circumstances, you may be eligible to join
            alternative schemes to find you settled accommodation more quickly
            in other parts of London, or further afield
          </p>
          <details
            className="govuk-details lbh-details"
            data-module="govuk-details"
          >
            <summary className="govuk-details__summary2 govuk-button lbh-button">
              <span className="govuk-details__summary-text2">
                Schemes available for current tenants
              </span>
            </summary>
            <div className="govuk-details__text">
              <details class="govuk-details lbh-details">
                <summary class="govuk-details__summary">
                  <span class="govuk-details__summary-text">
                    Transfer to another social housing property within London
                  </span>
                </summary>
                <div class="govuk-details__text">
                  <p>
                    The Housing Moves scheme is the Mayor of London’s scheme to
                    help social tenants in London to relocate to other boroughs.
                  </p>
                  <p>
                    All council tenants and housing association tenants can
                    apply under the scheme, as long as they have a secure or
                    assured tenancy. Priority is given to:
                  </p>
                  <ul>
                    <li>
                      people who have more bedrooms than they need and wish to
                      downsize
                    </li>
                    <li>people in work or training</li>
                    <li>people who want to move to give care</li>
                  </ul>
                  <p>
                    To find out more and to register for the scheme please visit
                    the{' '}
                    <a
                      href="https://www.housingmoves.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Housing moves webpage
                    </a>
                  </p>
                </div>
              </details>
              <details class="govuk-details lbh-details">
                <summary class="govuk-details__summary">
                  <span class="govuk-details__summary-text">
                    Mutual exchanges within Hackney
                  </span>
                </summary>
                <div class="govuk-details__text">
                  <p>
                    As a social tenant you can apply to exchange properties with
                    other council tenants within the borough or with tenants
                    from another council, housing association or other housing
                    provider.
                  </p>
                  <p>
                    You can get a mutual exchange application form by contacting
                    your local neighbourhood housing office by phone or email.
                  </p>
                  <p>
                    By phone - 020 8356 3330
                    <br />
                    By email - neighbourhood@hackney.gov.uk
                  </p>
                </div>
              </details>
              <details class="govuk-details lbh-details">
                <summary class="govuk-details__summary">
                  <span class="govuk-details__summary-text">
                    Mutual exchanges in other parts of the country
                  </span>
                </summary>
                <div class="govuk-details__text">
                  <p>
                    <a
                      href="https://www.homeswapper.co.uk"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      HomeSwapper
                    </a>{' '}
                    can help you to swap your council or housing association
                    home with other social tenants with over 20,000 properties
                    available
                  </p>
                </div>
              </details>
              <details class="govuk-details lbh-details">
                <summary class="govuk-details__summary">
                  <span class="govuk-details__summary-text">
                    Fresh Start Scheme
                  </span>
                </summary>
                <div class="govuk-details__text">
                  <p>
                    Our fresh start scheme enables you to move outside of London
                    into private rented accommodation. If you are over the age
                    of 55 you can also use the scheme to get sheltered housing
                    accommodation outside of London.
                  </p>
                  <p>
                    To join the scheme you must be a Hackney resident and
                    either:
                  </p>
                  <ul>
                    <li>a secure council tenant OR</li>
                    <li>
                      a housing association tenant (where your landlord will
                      give the property to the council to let)
                    </li>
                  </ul>
                  <p>
                    For more information on the scheme please contact - 020 8356
                    4411 or email - housingsupply@hackney.gov.uk
                  </p>
                </div>
              </details>
              <details class="govuk-details lbh-details">
                <summary class="govuk-details__summary">
                  <span class="govuk-details__summary-text">
                    National schemes for over 55s
                  </span>
                </summary>
                <div class="govuk-details__text">
                  <p>
                    The Seaside and Country Homes Scheme is open to Council or
                    housing association tenants who live in London and want to
                    relocate the countryside or the coast. All applicants must
                    be at least 60 years of age and capable of independent
                    living.
                  </p>
                  <p>Find out more by contacting - 020 8356 5751/7232.</p>
                  <p>
                    Or visit the{' '}
                    <a
                      href="https://www.london.gov.uk/what-we-do/housing-and-land/council-and-social-housing/seaside-and-country-homes"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Seaside and Country Homes webpage
                    </a>
                  </p>
                </div>
              </details>
            </div>
          </details>
          <div className="row">
            <br />
          </div>
          <details
            className="govuk-details lbh-details"
            data-module="govuk-details"
          >
            <summary className="govuk-details__summary2 govuk-button lbh-button">
              <span className="govuk-details__summary-text2">
                Other available schemes
              </span>
            </summary>
            <div className="govuk-details__text">
              <p>
                If you don’t currently have an existing social tenancy, we
                recommend registering with{' '}
                <a
                  href="https://homefinderuk.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Homefinder UK
                </a>
              </p>
              <p>
                Homefinder UK is a national housing mobility scheme available to
                anyone willing to move nationwide including:
              </p>
              <ul>
                <li>Homeless households</li>
                <li>Applicants living in temporary accommodation</li>
                <li>Private sector tenants threatened with homelessness</li>
                <li>Victims of domestic abuse &amp; grooming</li>
                <li>Overcrowded families &amp; social tenants</li>
              </ul>
            </div>
          </details>
        </div>
      </div>
    );

    if (this.props.waitTime.years < 1 && this.props.waitTime.months < 7) {
      title = 'Our recommendation: Learn how to bid effectively';
      message = `To put yourself in the best position to receive a housing offer, it's important to know how to bid for properties effectively`;
      buttonText = 'Tips for bidding';
      content = (
        <div>
          <h4>
            Our top 3 tips for you to maximise your chances of receiving a house
            offer:
          </h4>
          <ol>
            <li>
              Ensure you don't have arrears on your rent account, otherwise you
              won't be able to successfully bid for secure accommodation
            </li>
            <li>
              Bid for lifted properties on higher floors. Ground and lower floor
              properties are in higher demand and often reserved for those
              medically assessed as requiring low level access
            </li>
            <li>
              Review your bids on Monday evenings to give you a more accurate
              indication of whether you are likely to be shortlisted for a
              property, and the opportunity to move your bid to another property
              for which you may have a greater chance of success
            </li>
          </ol>
          <a
            href="https://www.ellcchoicehomes.org.uk/Data/ASPPages/1/53.aspx"
            role="button"
            draggable="false"
            class="govuk-button lbh-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bid for properties
          </a>
        </div>
      );
    }

    return (
      <div className="recommendations">
        <section className="lbh-page-announcement">
          <h2 className="lbh-page-announcement__title">{title}</h2>
          <div className="lbh-page-announcement__content">
            <p>{message}</p>
          </div>
          <details
            className="govuk-details lbh-details"
            data-module="govuk-details"
          >
            <summary className="govuk-details__summary2 govuk-button lbh-button">
              <span className="govuk-details__summary-text2">{buttonText}</span>
            </summary>
            <div className="govuk-details__text">{content}</div>
          </details>
        </section>
      </div>
    );
  }
}
