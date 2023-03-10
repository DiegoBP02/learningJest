export interface AppointmentProps {
  customer: string;
  startsAt: Date;
  endsAt: Date;
}

export class Appointment {
  private props: AppointmentProps;

  get customer() {
    return this.props.customer; // nao retorna mais o this.customer diretamente
  }

  get startsAt() {
    // inferencia de forma automatizada
    return this.props.startsAt;
  }

  get endsAt() {
    return this.props.endsAt;
  }

  constructor(props: AppointmentProps) {
    const { startsAt, endsAt } = props;

    if (endsAt <= startsAt) {
      throw new Error("Invalid end date");
    }

    if (startsAt <= new Date()) {
      throw new Error("Invalid start date");
    }

    this.props = props;
  }
}
