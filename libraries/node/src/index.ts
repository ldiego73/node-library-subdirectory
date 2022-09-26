interface NodeLibraryProps {
  name: string;
  description: string;
  status: boolean;
}

export class NodeLibrary {
  constructor(protected readonly props: NodeLibraryProps) {}

  getName(): string {
    return this.props.name;
  }

  getDescription(): string {
    return this.props.description;
  }

  getFullName(): string {
    return this.props.name + this.props.description;
  }
  
  toJSON(): Record<string, any> {
    return this.props;
  }
}
