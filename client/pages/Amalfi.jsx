import React from 'react';
import Hero from '../components/Hero';
import BookNow from '../components/BookNow';

function Amalfi() {
  return (
    <div>
      <Hero
        title="Amalfi Coast"
        subtitle="A sensual blend of both natural and cultural wonders"
        bkgdImgUrl='url("/img/excursions/posnotte.jpg")'
      />
      <div className="container pt-4">
        <h1> Why choose the Amalfi Coast?</h1>
        <p>
          The Amalfi Coast offers breathtaking views, kilometres of coast to
          explore, hidden beaches and coves, natural caves, history and myths
          that blend together. Indulge in the flavours of the Amalfi Coast,
          including the unforgettable taste of the sea that you can savour only
          here.
        </p>
        <p>
          Since Roman times, the Amalfi Coast has enchanted its visitors with
          its scenery and incredible views, capable of creating pure emotion.
          Admire the terraced gardens where the vines and lemon trees typical of
          this land flourish. A magical place, with plenty of beaches and coves
          that can often be reached only by sea, small rocky bays and inlets
          between the cobalt blue sea and the cliffs that fall down into the
          sea.
        </p>
        <h1>A terrace of Mediterranean colours</h1>
        <p>
          The Amalfi Coast, UNESCO world heritage site since 1997, visited on
          board a boat is our best way of taking you to the most famous gem in
          Italy. On your sojourn around the Amalfi Coast, the rhythm of the
          journey will be punctuated solely by the sound of your footsteps.
        </p>
        <h1>The areas of navigation</h1>
        <p>
          Amalfi / Positano / Praiano / Furore / Ravello / Maiori / Minori /
          Cetara / Vietri / Salerno
        </p>
      <BookNow />
      </div>
    </div>
  );
}

export default Amalfi;
