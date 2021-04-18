import Route from '@ember/routing/route';

export default class ProgrammersRoute extends Route {
  model() {
    return [
      'Chris Hesterman',
      'Micko Capacungan',
      'Krissy Do',
      'Lachelle Fryett',
    ];
  }
}
