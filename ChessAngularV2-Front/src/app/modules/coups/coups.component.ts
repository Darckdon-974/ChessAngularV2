import { Component, OnInit } from '@angular/core';
import { CoupService } from 'src/app/core/services/coup.service';
import { Coup } from 'src/app/shared/models/CoupModel';

@Component({
  selector: 'app-coups',
  templateUrl: './coups.component.html',
  styleUrls: ['./coups.component.scss']
})
export class CoupsComponent implements OnInit {

  gridColumns = 4;
  coups: Coup[] = [];

  constructor(
    private coupService: CoupService
  ) { }


  ngOnInit(): void {
    this.getCoups();
  }

  getCoups(): void {
    this.coupService.getCoups().subscribe(coups => this.coups = coups);
  }

  delete(coup: Coup): void {
    this.coups = this.coups.filter(h => h !== coup);
    this.coupService.deleteManga(coup.id).subscribe();
  }
}
